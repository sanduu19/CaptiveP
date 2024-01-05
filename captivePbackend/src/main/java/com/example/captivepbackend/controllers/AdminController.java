package com.example.captivepbackend.controllers;

import com.example.captivepbackend.dtos.AdminResponseDTO;
import com.example.captivepbackend.entities.Admin;
import com.example.captivepbackend.services.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController()
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping(path = "/admin")
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;
    @PostMapping(path = "/registration")
    public AdminResponseDTO registration(@RequestBody Admin admin){
        try {
            return adminService.saveAdmin(admin);
        }catch (Exception e){
            admin.setStatus("Error: "+e);
            return AdminResponseDTO.fromAdmin(admin);
        }
    }

    @PostMapping(path = "/login")
    public AdminResponseDTO login(@RequestBody Admin admin){
        try {
            return adminService.loginAdmin(admin);
        }catch (Exception e){
            admin.setStatus("Error: "+e);
            return AdminResponseDTO.fromAdmin(admin);
        }
    }

    @PostMapping(path = "/logout")
    public AdminResponseDTO logout(@RequestBody Admin admin){
        try {
            return adminService.logoutAdmin(admin);
        }catch (Exception e){
            admin.setStatus("Error: "+e);
            return AdminResponseDTO.fromAdmin(admin);
        }
    }
}
