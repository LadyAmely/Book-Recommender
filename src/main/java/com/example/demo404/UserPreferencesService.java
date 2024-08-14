package com.example.demo404;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserPreferencesService {

    @Autowired
    private UserPreferencesRepository userPreferencesRepository;

    public Optional<UserPreferences> getUserPreferencesByBookTitle(String bookTitle) {
        return userPreferencesRepository.findByBookTitle(bookTitle);
    }

    public UserPreferences saveUserPreferences(String bookTitle) {
        UserPreferences userPreferences = new UserPreferences();
        userPreferences.setBookTitle(bookTitle);
        return userPreferencesRepository.save(userPreferences);
    }
}
