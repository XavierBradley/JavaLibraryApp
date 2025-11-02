package com.champsoft.librarymanagementsystem.PresentationLayer;

import com.champsoft.librarymanagementsystem.DataAccessLayer.Author;
import jakarta.validation.constraints.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BookRequestModel {
    @NotBlank(message = "Title is required")
    @Size(min = 1, max = 200, message = "Title must be between 1-200 characters")
    private String Title;
    
    @NotBlank(message = "ISBN is required")
    private String ISBN;
    
    @Min(value = 1000, message = "Publication year must be at least 1000")
    @Max(value = 2100, message = "Publication year must be at most 2100")
    private int publicationYear;
    
    @NotNull(message = "Author is required")
    private Author author;
}
