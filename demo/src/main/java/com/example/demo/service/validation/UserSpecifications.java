package com.example.demo.service.validation;

import com.example.demo.entity.User;
import org.springframework.data.jpa.domain.Specification;
public class UserSpecifications {


    public static Specification<User> equalIgnoreCase(String field, String value) {
        return (root, query, cb) -> {
            if (value == null || value.isBlank()) {
                return cb.conjunction();
            }
            return cb.equal(
                    cb.lower(root.get(field).as(String.class)),
                    value.toLowerCase()
            );
        };
    }

    public static Specification<User> nameLike(String value) {
        return (root, query, cb) -> {
            if (value == null || value.isBlank()) {
                return cb.conjunction();
            }
            return cb.like(
                    cb.lower(root.get("name")),
                    "%" + value.toLowerCase() + "%"
            );
        };
    }

    public static Specification<User> greaterOrEqual(String field, Integer value) {
        return (root, query, cb) -> {
            if (value == null) {
                return cb.conjunction();
            }
            return cb.ge(root.get(field).as(Integer.class), value);
        };
    }

    public static Specification<User> lessOrEqual(String field, Integer value) {
        return (root, query, cb) -> {
            if (value == null) {
                return cb.conjunction();
            }
            return cb.le(root.get(field).as(Integer.class), value);
        };
    }
}