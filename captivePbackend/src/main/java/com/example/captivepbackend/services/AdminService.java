package com.example.captivepbackend.services;

import com.example.captivepbackend.dtos.AdminResponseDTO;
import com.example.captivepbackend.entities.Admin;
import com.example.captivepbackend.repositories.AdminRepo;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
@Data
public class AdminService {
    private final AdminRepo adminRepo;

    public AdminResponseDTO saveAdmin(Admin admin) {
        try{
            admin.setLoggedIn(true);
            admin.setStatus("Success");
            return AdminResponseDTO.fromAdmin(adminRepo.save(admin));
        }catch(Exception e) {
            admin.setStatus("Error: "+e);
            return AdminResponseDTO.fromAdmin(admin);
        }
    }

    public AdminResponseDTO loginAdmin(Admin admin) {
        try{
            Admin user = adminRepo.findByUserName(admin.getUserName()).orElseThrow(() -> new NoSuchElementException("Admin not found with userName: " + admin.getUserName()));
            if(user.getPassword().equals(admin.getPassword())){
                user.setLoggedIn(true);
                user.setStatus("Success");
                return AdminResponseDTO.fromAdmin(adminRepo.save(user));
            }
            user.setLoggedIn(false);
            user.setStatus("Incorrect Password");
            return AdminResponseDTO.fromAdmin(user);
        }catch (Exception e){
            admin.setStatus("Error: "+e);
            return AdminResponseDTO.fromAdmin(admin);
        }
    }

    public AdminResponseDTO logoutAdmin(Admin admin) {
        try{
            Admin user = adminRepo.findByUserName(admin.getUserName()).orElseThrow(() -> new NoSuchElementException("Admin not found with userName: " + admin.getUserName()));
            user.setLoggedIn(false);
            user.setStatus("Pending");
            return AdminResponseDTO.fromAdmin(adminRepo.save(user));
        }catch (Exception e){
            admin.setStatus("Error: "+e);
            return AdminResponseDTO.fromAdmin(admin);
        }
    }
}
