package com.example.demo.exceptions.exception;

public class NotFoundException extends BaseException {

    private NotFoundException(String field, String code, String message) {
        super(field, code, message);
    }

    public static NotFoundException entity(
            String entity,
            String field,
            Object value
    ) {
        return new NotFoundException(
                field,
                "NOT_FOUND",
                entity + " with " + field + " = " + value + " not found"
        );
    }
}

