package com.example.demo.service.validation;

import com.example.demo.exceptions.exception.ValidationException;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class EmailUniquenessChecker {
    private final UserRepository repository;
    @Value("${vars.validation.unique.email}")
    private String mail;

    public void check(String email) {
        if (repository.existsByEmail(email)) {
            System.out.println("Email already exists "+mail);
            throw ValidationException.alreadyExists("email", mail);
        }
    }

    public void check(String email, Long currentUserId) {
        boolean emailTaken =
                repository.existsByEmailAndIdNot(email, currentUserId);

        if (emailTaken) {
            throw ValidationException.alreadyExists("email",mail);
        }
    }
}
