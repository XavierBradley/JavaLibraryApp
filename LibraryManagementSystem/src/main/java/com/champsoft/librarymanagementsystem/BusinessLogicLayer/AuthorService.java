package com.champsoft.librarymanagementsystem.BusinessLogicLayer;

import com.champsoft.librarymanagementsystem.DataAccessLayer.Author;
import com.champsoft.librarymanagementsystem.DataAccessLayer.AuthorRepository;
import com.champsoft.librarymanagementsystem.DataAccessLayer.Book;
import com.champsoft.librarymanagementsystem.DataAccessLayer.BookRepository;
import com.champsoft.librarymanagementsystem.MapperLayer.AuthorMapper;
import com.champsoft.librarymanagementsystem.MapperLayer.BookMapper;
import com.champsoft.librarymanagementsystem.PresentationLayer.AuthorRequestModel;
import com.champsoft.librarymanagementsystem.PresentationLayer.AuthorResponseModel;
import com.champsoft.librarymanagementsystem.PresentationLayer.BookResponseModel;
import com.champsoft.librarymanagementsystem.Utilities.AuthorNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class AuthorService {
    private final AuthorRepository authorRepository;
    private final BookRepository bookRepository;
    private final AuthorMapper authorMapper;
    private final BookMapper bookMapper;
    public AuthorService(AuthorRepository authorRepository, BookRepository bookRepository, AuthorMapper authorMapper, BookMapper bookMapper) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
        this.authorMapper = authorMapper;
        this.bookMapper = bookMapper;
    }


    public List<AuthorResponseModel> getAllAuthors() {

        List<Author> authors = this.authorRepository.findAll();
        List<AuthorResponseModel> authorResponseModel = new ArrayList<>();
        for (Author author : authors) {
            authorResponseModel.add(this.authorMapper.toResponse(author));
        }
        return authorResponseModel;
    }

    public AuthorResponseModel getAuthorById(String id) {
        long idLong = Long.parseLong(id);
        Optional<Author> author = this.authorRepository.findById(idLong);
        if (author.isEmpty()) {
            throw new AuthorNotFoundException(HttpStatus.NOT_FOUND, "Author with given id is not found: " + id) ;
        }
        AuthorResponseModel authorResponse = this.authorMapper.toResponse(author.get());
        return authorResponse;
    }

    public AuthorResponseModel createNewAuthor(AuthorRequestModel authorData) {
        Author author = new Author();
        author = this.authorMapper.toAuthor(authorData);
        Author savedAuthor = this.authorRepository.save(author);
        return this.authorMapper.toResponse(savedAuthor);
    }

    public AuthorResponseModel updateAuthor(String id, AuthorRequestModel authorData) {
        long longId = Long.parseLong(id);
        Author existingAuthor = this.authorRepository.findById(longId)
                .orElseThrow(() -> new AuthorNotFoundException(HttpStatus.NOT_FOUND, "Authour with id: " + longId + " not found."));
        Author author = this.authorMapper.toAuthor(authorData);
        author.setId(longId); // keep the id the same
        return this.authorMapper.toResponse(this.authorRepository.save(author));
    }
    public void deleteAuthorById(String id) {
        long longId = Long.parseLong(id);
        Author author = authorRepository.findById(longId)
                .orElseThrow(() -> new AuthorNotFoundException(HttpStatus.NOT_FOUND, "Author with id: " + longId + " not found."));

        // Set owner_id = null for related cars
        List<Book> books = bookRepository.findByAuthorId(longId);
        for (Book book : books) {
            book.setAuthor(null);
            bookRepository.save(book);
        }

        authorRepository.delete(author);
    }

    public List<BookResponseModel> getBooksOfAuthorById(String id) {
        long idLong = Long.parseLong(id);
        Optional<Author> author = this.authorRepository.findById(idLong);
        List<Book> books = new ArrayList<>();
        if (author.isEmpty()) {
            throw new AuthorNotFoundException(HttpStatus.NOT_FOUND, "Author with given id is not found: " + id) ;
        }
        else{
            books = this.bookRepository.findBookByAuthor(author.get());
        }
        List<BookResponseModel> bookResponseModels = new ArrayList<>();
        for (Book book : books) {
            bookResponseModels.add(bookMapper.toResponse(book));
        }
        return bookResponseModels;
    }
}
