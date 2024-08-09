package com.example.demo404;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class WelcomeController {


    @GetMapping("/welcome")
    public String welcome() {
        return "forward:/index.html";
    }


}
