package com.example.demo.exceptions.api;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApiError {
    private String field;
    private String code;
    private String message;

    public ApiError(String field, String code, String message) {
        this.field = field;
        this.code = code;
        this.message = message;
    }

}

