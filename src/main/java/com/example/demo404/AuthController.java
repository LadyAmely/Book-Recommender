package com.example.demo404;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> body) {
        String email = body.get("email");;
        String password = body.get("password");

        User user = userRepository.findByEmail(email);
        Map<String, Object> response = new HashMap<>();
        if (user.getEmail().equals(email) && user.getPassword().equals(password)) {
            response.put("message", "Login successful");
            response.put("email", email);
        } else {
            response.put("message", "Invalid credentials");
        }
        return response;
    }
}
