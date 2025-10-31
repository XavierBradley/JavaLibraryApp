package com.champsoft.librarymanagementsystem.MapperLayer;

import com.champsoft.librarymanagementsystem.DataAccessLayer.Author;
import com.champsoft.librarymanagementsystem.PresentationLayer.BookRequestModel;
import com.champsoft.librarymanagementsystem.PresentationLayer.BookResponseModel;
import org.springframework.stereotype.Component;
import com.champsoft.librarymanagementsystem.DataAccessLayer.Book;

@Component
public class BookMapper {
    public BookResponseModel toResponse(Book book) {
        //     this.title = title;
        //        this.isbn = isbn;
        //        this.publicationYear = publicationYear;
        //        this.author = author;
        return new BookResponseModel(book.getId(), book.getTitle(), book.getIsbn(),
                book.getPublicationYear(), book.getAuthor());
    }

    public Book toBook(BookRequestModel bookData) {
        Book newBook = new Book();
        newBook.setId(bookData.getId());
        newBook.setTitle(bookData.getTitle());
        newBook.setIsbn(bookData.getISBN());
        newBook.setPublicationYear(bookData.getPublicationYear());
        newBook.setAuthor(bookData.getAuthor());
        return newBook;
    }
}
