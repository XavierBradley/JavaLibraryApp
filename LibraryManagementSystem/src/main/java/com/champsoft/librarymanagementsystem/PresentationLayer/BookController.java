package com.champsoft.librarymanagementsystem.PresentationLayer;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.champsoft.librarymanagementsystem.BusinessLogicLayer.BookService;

import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/books")
@RequiredArgsConstructor

public class BookController{
        private final BookService bookService;

        @GetMapping
        public List<BookResponseModel> getAllCars() {return bookService.getBooks();}

        @GetMapping("/{id}")
        public BookResponseModel getBookById(@PathVariable String id) {return bookService.getBookById(id);}

        @PostMapping("/cars")
        public Map<String, Object>  createBook(@RequestBody BookRequestModel bookData) {
            BookResponseModel savedBook = this.bookService.createBook( bookData);
            return Map.of(
                    "status", "success",
                    "message", "Book created successfully",
                    "new book saved", savedBook,
                    "id assigned to new book", savedBook.getId()
            );
        }



        @PostMapping
        public ResponseEntity<BookResponseModel> create(@RequestBody BookRequestModel req) {
            var created = bookService.createBook(req);
            return ResponseEntity
                    .created(URI.create("/books/" + created.getId()))
                    .body(created);
        }

        @PutMapping("/{id}")
        public BookResponseModel updateBook(@PathVariable String id, @RequestBody BookRequestModel req) {
            return bookService.updateBook(id, req);
        }


        @DeleteMapping("/{id}")
        @ResponseStatus(HttpStatus.NO_CONTENT)
        public void delete(@PathVariable Long id) { bookService.deleteBook(id); }

}


