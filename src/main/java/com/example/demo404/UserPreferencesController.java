package com.example.demo404;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/preferences-books")
@CrossOrigin("*")
public class UserPreferencesController {

    private final UserPreferencesService userPreferencesService;
    private final BookService bookService;

    public UserPreferencesController(UserPreferencesService userPreferencesService, BookService bookService) {
        this.userPreferencesService = userPreferencesService;
        this.bookService = bookService;
    }

    @GetMapping("/all")
    public List<UserPreferences> getAllBooksPreferred() {
        return userPreferencesService.getAllBooksPreferred();
    }

    @PostMapping("/added_books")
    public ResponseEntity<String> createPreferencesByBookTitle(@RequestParam String bookTitle, @RequestParam String image, @RequestParam String author, @RequestParam Float rating) {
        Optional<UserPreferences> userPreferencesOptional = userPreferencesService.getUserPreferencesByBookTitle(bookTitle);

        if (userPreferencesOptional.isPresent()) {
            return ResponseEntity.ok("User Preferences already exists for Book Title: " + bookTitle);
        } else {
            userPreferencesService.saveFavouriteBook(bookTitle, image, author, rating);
            return ResponseEntity.ok("User Preferences created for Book Title: " + bookTitle);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        userPreferencesService.deleteBook(id);
    }

    @DeleteMapping("/booksDelete")
    public ResponseEntity<?> deleteBook(@RequestParam String title) {
        try {
            userPreferencesService.deleteBookByTitle(title);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred: " + e.getMessage());
        }
    }



    @GetMapping("/recommendBooks")
    public List<Book> recommendBooksByAuthor() {
        List<UserPreferences> favoriteBooks = userPreferencesService.getAllBooksPreferred();
        List<Book> books = bookService.getAllBooks();
        return userPreferencesService.recommendBooksByAuthor(favoriteBooks, books);
    }






}
