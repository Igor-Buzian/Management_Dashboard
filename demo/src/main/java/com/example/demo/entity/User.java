package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String name;

    @Column(nullable = false, unique = true, length = 255)
    private String email;

    @Column(length = 100)
    private String city;

    @Column(length = 100)
    private String profession;

    private Integer age;

    @Column(name = "experience_years")
    private Integer experienceYears;

    @Column(length = 20)
    private String status;

    @Column(name = "avatar_url", length = 500)
    private String avatarUrl;


    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;


    @PrePersist
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
        if (this.status == null) {
            this.status = "ACTIVE";
        }
    }
}
