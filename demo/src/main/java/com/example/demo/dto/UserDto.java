package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class UserDto {

    private Long id;

    private String name;
    private String email;

    private String city;
    private String profession;

    private Integer age;
    private Integer experienceYears;

    private String status;
    private String avatarUrl;

    private LocalDateTime createdAt;
}
