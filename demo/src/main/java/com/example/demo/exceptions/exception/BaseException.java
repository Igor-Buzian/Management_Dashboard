package com.example.demo.exceptions.exception;

import lombok.Getter;

@Getter
public class BaseException extends RuntimeException {
    protected BaseException(String field, String code, String message) {
        super(message);
        this.field = field;
        this.code = code;
    }

    private final String field;
    private final String code;


}
