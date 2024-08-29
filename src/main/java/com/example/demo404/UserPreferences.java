package com.example.demo404;

import jakarta.persistence.*;

@Entity
@Table(name="favourite_books")
public class UserPreferences {

    @Id
    @Column(name="user_preferences_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "book_title", nullable = false)
    private String bookTitle;

    @Column(name="image", nullable = false)
    private String image;

    @Column(name="author", nullable = false)
    private String author;

    @Column(name="rating", nullable = false)
    private Float rating;


    public UserPreferences(){

    }

    public UserPreferences(String bookTitle, String image, String author, Float rating){
        this.bookTitle = bookTitle;
        this.image = image;
        this.author = author;
        this.rating = rating;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBookTitle() {
        return bookTitle;
    }

    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }

    public void setImage(String image){
        this.image = image;
    }
    public String getImage(){
        return image;
    }

    public void setAuthor(String author){
        this.author = author;
    }

    public String getAuthor(){
        return author;
    }

    public Float getRating(){
        return rating;
    }

    public void setRating(Float rating){
        this.rating = rating;
    }




}
