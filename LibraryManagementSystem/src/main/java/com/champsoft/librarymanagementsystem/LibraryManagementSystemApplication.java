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
        // Create 12 Authors (requirement: 10+)
        Author author1 = new Author("Mary Shelley", "Pioneer of science fiction literature, known for Frankenstein", "mary.shelley@example.com");
        Author author2 = new Author("Rick Riordan", "Young adult fantasy writer, creator of Percy Jackson series", "rick.riordan@example.com");
        Author author3 = new Author("J.K. Rowling", "British author, creator of the Harry Potter series", "jk.rowling@example.com");
        Author author4 = new Author("Stephen King", "Master of horror fiction and suspense", "stephen.king@example.com");
        Author author5 = new Author("Agatha Christie", "Queen of mystery novels, creator of Hercule Poirot", "agatha.christie@example.com");
        Author author6 = new Author("George Orwell", "Political novelist and essayist", "george.orwell@example.com");
        Author author7 = new Author("Jane Austen", "English romantic novelist", "jane.austen@example.com");
        Author author8 = new Author("Mark Twain", "American humorist and writer", "mark.twain@example.com");
        Author author9 = new Author("Ernest Hemingway", "Nobel Prize winning American author", "ernest.hemingway@example.com");
        Author author10 = new Author("Maya Angelou", "American poet and civil rights activist", "maya.angelou@example.com");
        Author author11 = new Author("Toni Morrison", "Nobel laureate in literature", "toni.morrison@example.com");
        Author author12 = new Author("Gabriel Garcia Marquez", "Colombian novelist, master of magical realism", "gabriel.marquez@example.com");
        
        authorRepository.saveAll(Arrays.asList(author1, author2, author3, author4, author5, author6, 
                                               author7, author8, author9, author10, author11, author12));
        
        // Create 15 Books (requirement: 10+)
        Book book1 = new Book("Frankenstein", "9780486282114", 1818, author1);
        Book book2 = new Book("Percy Jackson and the Lightning Thief", "9780786838653", 2005, author2);
        Book book3 = new Book("Harry Potter and the Sorcerer's Stone", "9780439708180", 1997, author3);
        Book book4 = new Book("The Shining", "9780385121675", 1977, author4);
        Book book5 = new Book("Murder on the Orient Express", "9780062693662", 1934, author5);
        Book book6 = new Book("1984", "9780451524935", 1949, author6);
        Book book7 = new Book("Animal Farm", "9780451526342", 1945, author6);
        Book book8 = new Book("Pride and Prejudice", "9780141439518", 1813, author7);
        Book book9 = new Book("The Adventures of Tom Sawyer", "9780143107330", 1876, author8);
        Book book10 = new Book("The Old Man and the Sea", "9780684801223", 1952, author9);
        Book book11 = new Book("I Know Why the Caged Bird Sings", "9780345514400", 1969, author10);
        Book book12 = new Book("Beloved", "9781400033416", 1987, author11);
        Book book13 = new Book("One Hundred Years of Solitude", "9780060883287", 1967, author12);
        Book book14 = new Book("Harry Potter and the Chamber of Secrets", "9780439064873", 1998, author3);
        Book book15 = new Book("It", "9781501142970", 1986, author4);
        
        bookRepository.saveAll(Arrays.asList(book1, book2, book3, book4, book5, book6, book7, book8, 
                                            book9, book10, book11, book12, book13, book14, book15));
    }
}
