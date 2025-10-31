package com.champsoft.librarymanagementsystem.DataAccessLayer;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class Book {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    private String title, isbn;
    private int publicationYear;
    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="fk_author")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Author author;

    public Book(String title, String isbn, int publicationYear, Author author) {

        this.title = title;
        this.isbn = isbn;
        this.publicationYear = publicationYear;
        this.author = author;
    }
}
