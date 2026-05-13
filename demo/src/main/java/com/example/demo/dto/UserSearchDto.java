package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserSearchDto {
    private String query;
    private String city;
    private String profession;
    private String status;

    private Integer ageFrom;
    private Integer ageTo;

    private Integer experienceFrom;
    private Integer experienceTo;
}