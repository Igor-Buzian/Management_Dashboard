package com.example.demo.service;

import com.example.demo.dto.CreateUserDto;
import com.example.demo.dto.UpdateUserDto;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.exceptions.exception.NotFoundException;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.validation.EmailUniquenessChecker;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;
    private final EmailUniquenessChecker emailUniquenessChecker;


    public List<UserDto> getAll() {
        return repository.findAll()
                .stream()
                .map(this::toDto)
                .toList();
    }

    private UserDto toDto(User user) {
        UserDto dto = new UserDto();

        dto.setId(user.getId());
        dto.setName(user.getName());
        dto.setEmail(user.getEmail());

        dto.setCity(user.getCity());
        dto.setProfession(user.getProfession());
        dto.setAge(user.getAge());
        dto.setExperienceYears(user.getExperienceYears());

        dto.setStatus(user.getStatus());
        dto.setAvatarUrl(user.getAvatarUrl());
        dto.setCreatedAt(user.getCreatedAt());

        return dto;
    }

    public User addUser(CreateUserDto dto) {
        emailUniquenessChecker.check(dto.getEmail());
        LocalDateTime createdAt = LocalDateTime.now();
        User user = new User();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setCity(dto.getCity());
        user.setProfession(dto.getProfession());
        user.setAge(dto.getAge());
        user.setExperienceYears(dto.getExperienceYears());
        user.setStatus("ACTIVE");
        user.setAvatarUrl(dto.getAvatarUrl());
        user.setCreatedAt(createdAt);

        return repository.save(user);
    }

    public void deleteUser(Long id) {
        if (!repository.existsById(id)) {
            throw NotFoundException.entity("user", "id", id);
        }
        repository.deleteById(id);
    }

    public UserDto updateUser(Long id, UpdateUserDto dto) {
        User user = repository.findById(id)
                .orElseThrow(() -> NotFoundException.entity("user", "id", id));

        if (dto.getName() != null) user.setName(dto.getName());

        if (dto.getEmail() != null) {
            emailUniquenessChecker.check(dto.getEmail(), user.getId());
            user.setEmail(dto.getEmail());
        }

        if (dto.getCity() != null) user.setCity(dto.getCity());
        if (dto.getProfession() != null) user.setProfession(dto.getProfession());
        if (dto.getAge() != null) user.setAge(dto.getAge());
        if (dto.getExperienceYears() != null) user.setExperienceYears(dto.getExperienceYears());
        if (dto.getAvatarUrl() != null) user.setAvatarUrl(dto.getAvatarUrl());
        if (dto.getStatus() != null) user.setStatus(dto.getStatus());
        return toDto(repository.save(user));
    }
}
