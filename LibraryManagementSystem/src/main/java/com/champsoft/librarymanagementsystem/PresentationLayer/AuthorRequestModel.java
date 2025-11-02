package com.champsoft.librarymanagementsystem.PresentationLayer;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AuthorRequestModel {
    @NotBlank(message = "Name is required")
    @Size(min = 1, max = 100, message = "Name must be between 1-100 characters")
    private String Name;
    
    @NotBlank(message = "Biography is required")
    @Size(min = 1, max = 1000, message = "Biography must be between 1-1000 characters")
    private String biography;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Email must be valid")
    private String email;
}
