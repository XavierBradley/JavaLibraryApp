package com.champsoft.librarymanagementsystem.PresentationLayer;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.champsoft.librarymanagementsystem.BusinessLogicLayer.AuthorService;


import java.net.URI;
import java.util.List;
import jakarta.validation.Valid;
@RestController
@RequestMapping("/authors")
@RequiredArgsConstructor
public class AuthorController {
    private final AuthorService authorService;

    @GetMapping
    public List<AuthorResponseModel> getAllAuthors() {
        return this.authorService.getAllAuthors();

    }
    @GetMapping("/{id}")
    public AuthorResponseModel getAuthorById(@PathVariable String id) {
        return this.authorService.getAuthorById(id);
    }

    @PostMapping
    public ResponseEntity<AuthorResponseModel> createNewAuthor(@Valid @RequestBody AuthorRequestModel req) {
    var created = authorService.createNewAuthor(req);
    return ResponseEntity.created(URI.create("/authors/" + created.getId())).body(created);
    }

    @PutMapping("/{id}")
    public AuthorResponseModel updateAuthor(@PathVariable String id, @Valid @RequestBody AuthorRequestModel authorData) {
    return this.authorService.updateAuthor(id, authorData);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAuthor(@PathVariable String id) {
        this.authorService.deleteAuthorById(id);
    }

    @GetMapping("/{id}/books")
    public List<BookResponseModel> getBooksOfAuthorById(@PathVariable String id) {
        return this.authorService.getBooksOfAuthorById(id);
    }
}

