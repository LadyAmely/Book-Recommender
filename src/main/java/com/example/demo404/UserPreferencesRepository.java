package com.example.demo404;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserPreferencesRepository extends JpaRepository<UserPreferences, Long> {

    Optional<UserPreferences> findByBookTitle(String bookTitle);
    void deleteByBookTitle(String bookTitle);




}
