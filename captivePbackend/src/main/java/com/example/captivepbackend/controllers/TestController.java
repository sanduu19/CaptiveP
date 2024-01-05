package com.example.captivepbackend.controllers;

import com.example.captivepbackend.entities.Admin;
import com.example.captivepbackend.entities.Field;
import org.springframework.web.bind.annotation.*;

@RestController()
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping(path = "/test")
public class TestController {
    @PostMapping(path = "/testing")
    public String testing(@RequestBody Admin admin){
        System.out.println(admin.getEmail());
        return "Success";
    }

    @PostMapping(path = "/testingfields")
    public String testingFields(@RequestBody Field field){
        System.out.println(field.getName());
        return "Success";
    }
}
