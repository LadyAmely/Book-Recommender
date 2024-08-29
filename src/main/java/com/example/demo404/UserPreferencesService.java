package com.example.demo404;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserPreferencesService {

    @Autowired
    private UserPreferencesRepository userPreferencesRepository;


    private BookRepository bookRepository;


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




    public List<Book> recommendBooksByAuthor(List<UserPreferences> userPreferences, List<Book> recommendedList) {
        Map<String, Integer> authorCountMap = new HashMap<>();
        Map<String, Integer> genreCountMap = new HashMap<>();
        int counter = 0;


        for (UserPreferences preference : userPreferences) {
            String author = preference.getAuthor();
            authorCountMap.put(author, authorCountMap.getOrDefault(author, 0) + 1);
        }

        int maxAuthorCount = authorCountMap.values().stream().max(Integer::compare).orElse(0);


        for (Book book : recommendedList) {
            String genre = book.getGenre();
            genreCountMap.put(genre, genreCountMap.getOrDefault(genre, 0) + 1);
        }

        int maxGenreCount = genreCountMap.values().stream().max(Integer::compare).orElse(0);
        String mostPreferredGenre = genreCountMap.entrySet().stream()
                .filter(entry -> entry.getValue() == maxGenreCount)
                .map(Map.Entry::getKey)
                .findFirst()
                .orElse(null);

        List<Book> recommendedBooks = new ArrayList<>();
        Set<String> userPreferredBooks = new HashSet<>();


        for (UserPreferences preference : userPreferences) {
            userPreferredBooks.add(preference.getBookTitle());
        }


        List<Book> sortedBooks = recommendedList.stream()
                .filter(book -> {
                    int authorCount = authorCountMap.getOrDefault(book.getAuthor(), 0);
                    return authorCount == maxAuthorCount || (maxAuthorCount <= 1 && book.getGenre().equals(mostPreferredGenre));
                })
                .filter(book -> !userPreferredBooks.contains(book.getTitle()))
                .sorted((book1, book2) -> Double.compare(book2.getRating(), book1.getRating()))
                .collect(Collectors.toList());


        for (Book recommendedBook : sortedBooks) {
            if (counter < 6) {
                recommendedBooks.add(recommendedBook);
                counter++;
            } else {
                break;
            }
        }

        return recommendedBooks;
    }







}
