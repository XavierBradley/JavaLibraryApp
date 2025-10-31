package com.champsoft.librarymanagementsystem;

import com.champsoft.librarymanagementsystem.DataAccessLayer.Author;
import com.champsoft.librarymanagementsystem.DataAccessLayer.AuthorRepository;
import com.champsoft.librarymanagementsystem.DataAccessLayer.Book;
import com.champsoft.librarymanagementsystem.DataAccessLayer.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class LibraryManagementSystemApplication implements CommandLineRunner {

    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;

    public LibraryManagementSystemApplication(BookRepository bookRepository, AuthorRepository authorRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
    }


    public static void main(String[] args) {
        SpringApplication.run(LibraryManagementSystemApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        //this.name = name;
        //        this.biography = biography;
        //        this.eMail = eMail;
        Author author1 = new Author("Mary Sheller", "Mary Shelley was one of the pioneers of modern literatue, one of the first women to make such massive strides in literature. Known as one of the founders of the genre of science fiction, Mary Shelley is most well known for her Horror Novel Frankenstein", "MaryShelley@gmail.com");
        Author author2 = new Author("Rick Riordian", "Rick Riordian is a young adult novel writer most well known for his series that recontextualize ancient mythologies, writing them in the modern world and bringing new life to classic stories.", "RRiordian@gmail.com");
        authorRepository.saveAll(Arrays.asList(author1, author2));
        //       this.title = title;
        //        this.isbn = isbn;
        //        this.publicationYear = publicationYear;
        //        this.author = author;
        Book book1 = new Book("Percy Jackson and The Olympians: The Lightning Thief", "123456", 2005, author2);
        Book book2 = new Book("Frankenstein", "654321", 1818, author1);
        Book book3 = new Book("The Heroes of Olympus: The Lost Hero", "234567", 2010,author2);
        bookRepository.saveAll(Arrays.asList(book1, book2, book3));

    }
}
