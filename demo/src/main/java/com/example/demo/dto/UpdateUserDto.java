package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateUserDto {

    private String name;
    private String email;

    private String city;
    private String profession;

    private Integer age;
    private Integer experienceYears;

    private String avatarUrl;
    private String status;
}
