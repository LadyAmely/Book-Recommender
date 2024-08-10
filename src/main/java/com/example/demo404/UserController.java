package com.example.demo404;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserService userService;


    @GetMapping("/store")
    public String freelance(){

        return "freelancers";
    }


    @PostMapping("/users")
    public User saveUser(@RequestBody User user){


        return userService.create(user);

    }

    @GetMapping("/getAll")
    public List<User> getAllUsers(){


        return userService.getAllUsers();
    }
}
