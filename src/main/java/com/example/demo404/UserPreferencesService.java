package com.example.demo404;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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

    public UserPreferences saveFavouriteBook(String bookTitle, String image, String author, Float rating){
        UserPreferences userPreferences = new UserPreferences();
        userPreferences.setBookTitle(bookTitle);
        userPreferences.setAuthor(author);
        userPreferences.setImage(image);
        userPreferences.setRating(rating);
        return userPreferencesRepository.save(userPreferences);
    }

    public List<UserPreferences> getAllBooksPreferred() {
        return userPreferencesRepository.findAll();
    }

    public void deleteBook(Long id) {
        userPreferencesRepository.deleteById(id);
    }

    @Transactional
    public void deleteBookByTitle(String bookTitle) {
        userPreferencesRepository.deleteByBookTitle(bookTitle);
    }
}
