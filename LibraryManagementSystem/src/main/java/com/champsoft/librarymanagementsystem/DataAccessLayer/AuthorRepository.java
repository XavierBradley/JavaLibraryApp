package com.champsoft.librarymanagementsystem.DataAccessLayer;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, Long> {
}
