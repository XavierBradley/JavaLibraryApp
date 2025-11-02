package com.champsoft.librarymanagementsystem.PresentationLayer;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.champsoft.librarymanagementsystem.BusinessLogicLayer.BookService;
import jakarta.validation.Valid;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    @GetMapping
    public List<BookResponseModel> getAllBooks() {
        return bookService.getBooks();
    }

    @GetMapping("/{id}")
    public BookResponseModel getBookById(@PathVariable String id) {
        return bookService.getBookById(id);
    }

    @PostMapping
    public ResponseEntity<BookResponseModel> create(@Valid @RequestBody BookRequestModel req) {
        var created = bookService.createBook(req);
        return ResponseEntity.created(URI.create("/books/" + created.getId())).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BookResponseModel> updateBook(@PathVariable String id, @Valid @RequestBody BookRequestModel req) {
        return ResponseEntity.ok(bookService.updateBook(id, req));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        bookService.deleteBook(id);
    }
}
