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
        return dto;
    }

    public User addUser(CreateUserDto dto) {
        emailUniquenessChecker.check(dto.getEmail());

        User user = new User();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());

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

        if (dto.getName() != null) {
            user.setName(dto.getName());
        }

        if (dto.getEmail() != null) {
            emailUniquenessChecker.check(dto.getEmail(), id);
            user.setEmail(dto.getEmail());
        }

        User saved = repository.save(user);
        return toDto(saved);
    }
}
