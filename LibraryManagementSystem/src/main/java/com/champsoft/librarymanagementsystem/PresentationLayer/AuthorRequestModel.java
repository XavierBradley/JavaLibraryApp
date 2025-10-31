package com.champsoft.librarymanagementsystem.PresentationLayer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AuthorRequestModel {
    private String Name;
    private String biography;
    private String email;
}
