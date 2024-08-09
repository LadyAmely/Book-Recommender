package com.example.demo404;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {

    @RequestMapping("/app")
    public String welcome() {
        return "forward:/index.html";
    }

    @RequestMapping("/")
    public String home() {
        return "forward:/index.html";
    }

}





