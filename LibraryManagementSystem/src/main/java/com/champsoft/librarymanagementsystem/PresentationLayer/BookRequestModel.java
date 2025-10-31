package com.champsoft.librarymanagementsystem.PresentationLayer;
import com.champsoft.librarymanagementsystem.DataAccessLayer.Author;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BookRequestModel {
    private long id;
   private String Title;
   private String ISBN;
   private int publicationYear;
   private Author author;
}
