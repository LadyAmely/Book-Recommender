package com.example.demo404;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/preferences-books")
@CrossOrigin("*")
public class UserPreferencesController {

    private final UserPreferencesService userPreferencesService;

    public UserPreferencesController(UserPreferencesService userPreferencesService) {
        this.userPreferencesService = userPreferencesService;
    }

    @PostMapping("/added_books")
    public ResponseEntity<String> createPreferencesByBookTitle(@RequestParam String bookTitle) {
        Optional<UserPreferences> userPreferencesOptional = userPreferencesService.getUserPreferencesByBookTitle(bookTitle);

        if (userPreferencesOptional.isPresent()) {
            return ResponseEntity.ok("User Preferences already exists for Book Title: " + bookTitle);
        } else {
            userPreferencesService.saveUserPreferences(bookTitle);
            return ResponseEntity.ok("User Preferences created for Book Title: " + bookTitle);
        }
    }
}
