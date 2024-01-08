package com.example.captivepbackend.controllers;

import com.example.captivepbackend.dtos.AdminResponse;
import com.example.captivepbackend.entities.Admin;
import com.example.captivepbackend.services.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping(path = "/admin")
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;

    @PostMapping(path = "/registration")
    public ResponseEntity<AdminResponse>  registration(@RequestBody Admin admin){
        return ResponseEntity.status(HttpStatus.OK).body(adminService.saveAdmin(admin));
    }

    @PostMapping(path = "/login")
    public ResponseEntity<AdminResponse> login(@RequestBody Admin admin){
        return ResponseEntity.status(HttpStatus.OK).body(adminService.loginAdmin(admin));
    }

    @PostMapping(path = "/logout")
    public ResponseEntity<AdminResponse> logout(@RequestBody Admin admin){
        return ResponseEntity.status(HttpStatus.OK).body(adminService.logoutAdmin(admin));
    }

    @PostMapping(path = "/get")
    public ResponseEntity<AdminResponse> getAdminDetailsByName(@RequestBody String name){
        return ResponseEntity.status(HttpStatus.OK).body(adminService.getAdminDetailsByName(name));
    }
}
