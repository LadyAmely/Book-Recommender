package com.example.demo404;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    public User create(User user) {

        return userRepository.save(user);
    }


    public List<User> getAllUsers() {

        return userRepository.findAll();
    }
}
