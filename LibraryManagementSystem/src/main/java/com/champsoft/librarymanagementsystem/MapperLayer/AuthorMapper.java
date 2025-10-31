package com.champsoft.librarymanagementsystem.MapperLayer;

import com.champsoft.librarymanagementsystem.DataAccessLayer.Author;
import com.champsoft.librarymanagementsystem.PresentationLayer.AuthorRequestModel;
import com.champsoft.librarymanagementsystem.PresentationLayer.AuthorResponseModel;
import org.springframework.stereotype.Component;

@Component
public class AuthorMapper {
    public AuthorResponseModel toResponse(Author author) {

        //   private long id;
        //    private String name, biography, eMail;
        //    private List<Book> books;
        return new AuthorResponseModel(author.getId(), author.getName(),
                author.getBiography(), author.getEMail());
    }

    public Author toAuthor(AuthorRequestModel authorRequestModel) {
        Author author = new Author();
        author.setName(authorRequestModel.getName());
        author.setBiography(authorRequestModel.getBiography());
        author.setEMail(authorRequestModel.getEmail());
        return author;
    }
}
