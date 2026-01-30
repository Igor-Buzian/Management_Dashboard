package com.example.demo.exceptions.exception;

public class ValidationException extends BaseException {


    protected ValidationException(String field, String code, String message) {
        super(field, code, message);
    }

    public static ValidationException alreadyExists(String field, String code) {
        return new ValidationException(field, code, field + " already exists");
    }
}
