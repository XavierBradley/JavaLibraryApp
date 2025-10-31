package com.champsoft.librarymanagementsystem.Utilities;

import org.springframework.http.HttpStatus;

public class BookNotFoundException extends RuntimeException {
    public BookNotFoundException(HttpStatus httpStatus, String message) {
        super(message);
    }
}
