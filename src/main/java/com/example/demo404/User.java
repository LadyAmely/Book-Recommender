package com.example.demo404;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name="users_table")
public class User {

    @Id
    @Column(name="user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @Column(name="surname")
    private String surname;



    public void setId(Long id){

        this.id = id;
    }

    public void setName(String name){

        this.name = name;
    }

    public void setSurname(String surname){
        this.surname = surname;
    }

    public void setEmail(String email){

        this.email = email;
    }

    public void setPassword(String password){

        this.password = password;
    }


    public Long getId(){

        return id;
    }

    public String getName(){

        return name;

    }

    public String getSurname(){

        return surname;
    }

    public String getEmail(){

        return email;
    }

    public String getPassword(){

        return password;
    }


}
