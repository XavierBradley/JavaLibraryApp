package com.champsoft.librarymanagementsystem.Utilities;

import org.springframework.http.HttpStatus;

public class AuthorNotFoundException extends RuntimeException {
    public AuthorNotFoundException(HttpStatus httpStatus, String message) {
        super(message);
    }
}
