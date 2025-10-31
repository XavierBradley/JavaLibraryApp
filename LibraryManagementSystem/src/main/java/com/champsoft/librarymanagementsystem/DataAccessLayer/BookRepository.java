package com.champsoft.librarymanagementsystem.DataAccessLayer;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByAuthorId(long longId);

    List<Book> findBookByAuthor(Author author);
}
