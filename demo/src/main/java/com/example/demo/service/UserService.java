package com.example.demo.service;

import com.example.demo.dto.CreateUserDto;
import com.example.demo.dto.UpdateUserDto;
import com.example.demo.dto.UserDto;
import com.example.demo.dto.UserSearchDto;
import com.example.demo.entity.User;
import com.example.demo.exceptions.exception.NotFoundException;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.validation.EmailUniquenessChecker;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

import static com.example.demo.service.validation.UserSpecifications.*;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;
    private final EmailUniquenessChecker emailUniquenessChecker;

    public static Specification<User> alwaysTrue() {
        return (root, query, cb) -> cb.conjunction();
    }

    public List<UserDto> search(UserSearchDto f) {

        if (f == null) {
            f = new UserSearchDto();
        }

        Specification<User> spec = (root, query, cb) -> cb.conjunction();

        if (f.getQuery() != null && !f.getQuery().isBlank()) {
            spec = spec.and(nameLike(f.getQuery()));
        }

        if (f.getCity() != null && !f.getCity().isBlank()) {
            spec = spec.and(equalIgnoreCase("city", f.getCity()));
        }

        if (f.getProfession() != null && !f.getProfession().isBlank()) {
            spec = spec.and(equalIgnoreCase("profession", f.getProfession()));
        }

        if (f.getStatus() != null && !f.getStatus().isBlank()) {
            spec = spec.and(equalIgnoreCase("status", f.getStatus()));
        }

        if (f.getAgeFrom() != null) {
            spec = spec.and(greaterOrEqual("age", f.getAgeFrom()));
        }

        if (f.getAgeTo() != null) {
            spec = spec.and(lessOrEqual("age", f.getAgeTo()));
        }

        if (f.getExperienceFrom() != null) {
            spec = spec.and(greaterOrEqual("experienceYears", f.getExperienceFrom()));
        }

        if (f.getExperienceTo() != null) {
            spec = spec.and(lessOrEqual("experienceYears", f.getExperienceTo()));
        }

        try {
            return repository.findAll(spec)
                    .stream()
                    .map(this::toDto)
                    .toList();
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

   /* public static Specification<User> equalIgnoreCase(String field, String value) {
        return (root, query, cb) -> {

            try {
                if (value == null || value.isBlank()) {
                    return cb.conjunction();
                }

                return cb.equal(
                        cb.lower(root.get(field).as(String.class)),
                        value.toLowerCase()
                );
            } catch (Exception e) {
                System.out.println("ERROR FIELD: " + field);
                throw e;
            }
        };
    }*/

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
