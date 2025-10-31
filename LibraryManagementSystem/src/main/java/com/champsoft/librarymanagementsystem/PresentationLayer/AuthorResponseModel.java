package com.champsoft.librarymanagementsystem.PresentationLayer;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AuthorResponseModel {
    private long id;
    private String name;
    private String biography;
    private String email;
}
