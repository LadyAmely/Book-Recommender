package com.example.demo404;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public List<Book> recommendBooksByAuthor(String author){

        List<Book> recommendedBooks = new ArrayList<>();
        for(Book book : getAllBooks()){

            if(book.getAuthor().equalsIgnoreCase(author)){
                recommendedBooks.add(book);
            }
        }
        return recommendedBooks;
    }

}
