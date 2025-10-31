package com.champsoft.librarymanagementsystem.BusinessLogicLayer;

import com.champsoft.librarymanagementsystem.DataAccessLayer.Book;
import com.champsoft.librarymanagementsystem.DataAccessLayer.BookRepository;
import com.champsoft.librarymanagementsystem.MapperLayer.BookMapper;
import com.champsoft.librarymanagementsystem.PresentationLayer.BookResponseModel;
import com.champsoft.librarymanagementsystem.PresentationLayer.BookRequestModel;
import com.champsoft.librarymanagementsystem.Utilities.BookNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class BookService {
    private final BookRepository bookRepository;
    private final BookMapper bookMapper;
    public BookService(BookRepository bookRepository, BookMapper bookMapper) {
        this.bookRepository = bookRepository;
        this.bookMapper = bookMapper;
    }
    public List<BookResponseModel> getBooks() {

        List<Book> books = this.bookRepository.findAll();
        List<BookResponseModel> bookResponseModel = new ArrayList<>();
        for (Book book : books){
            bookResponseModel.add( this.bookMapper.toResponse(book));
        }
        return bookResponseModel;
    }
    public BookResponseModel getBookById(String id) {
        long idLong = Long.parseLong(id);
        Book book =  this.bookRepository.findById(idLong)
                .orElseThrow(() -> new BookNotFoundException(HttpStatus.NOT_FOUND , "Book with id: " + idLong + " not found."));;
        BookResponseModel bookResponseModel = this.bookMapper.toResponse(book);
        return bookResponseModel;
    }
    public BookResponseModel createBook(BookRequestModel bookData) {

        Book newBook = new Book();
        newBook = this.bookMapper.toBook(bookData);
        Book savedBook = this.bookRepository.save(newBook);

        return this.bookMapper.toResponse(savedBook);

    }
    public BookResponseModel updateBook(String id, BookRequestModel bookData) {
        long idLong = Long.parseLong(id);
        Book existingBook = bookRepository.findById(idLong)
                .orElseThrow(() -> new BookNotFoundException(HttpStatus.NOT_FOUND , "Book with id: " + idLong + " not found."));
        Book updatedBook = bookMapper.toBook(bookData);
        updatedBook.setId(idLong);
        return bookMapper.toResponse(bookRepository.save(updatedBook));
    }
    public void deleteBook(Long id) {
        this.bookRepository.deleteById(id);
    }
}
