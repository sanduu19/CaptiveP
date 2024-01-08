package com.example.captivepbackend.services;

import com.example.captivepbackend.dtos.AdminResponse;
import com.example.captivepbackend.entities.Admin;
import com.example.captivepbackend.repositories.AdminRepo;
import lombok.Data;
import org.springframework.stereotype.Service;
import java.util.NoSuchElementException;

@Service
@Data
public class AdminService {
    private final AdminRepo adminRepo;

    public AdminResponse saveAdmin(Admin admin) {
        return AdminResponse.fromAdmin(adminRepo.save(admin));
    }

    public AdminResponse loginAdmin(Admin admin) {
        Admin user = adminRepo.findByUserName(admin.getUserName()).orElseThrow(() -> new NoSuchElementException("Admin not found with userName: " + admin.getUserName()));
        if(!user.isLoggedIn()){
            if(user.getPassword().equals(admin.getPassword())){
                user.setLoggedIn(true);
                user.setStatus("Success");
                return AdminResponse.fromAdmin(adminRepo.save(user));
            }
            user.setLoggedIn(false);
            user.setStatus("Incorrect Password");
            return AdminResponse.fromAdmin(user);
        }
        user.setLoggedIn(false);
        user.setStatus("Account is in use. One device Per time");
        return AdminResponse.fromAdmin(user);
    }

    public AdminResponse logoutAdmin(Admin admin) {
        Admin user = adminRepo.findByUserName(admin.getUserName()).orElseThrow(() -> new NoSuchElementException("Admin not found with userName: " + admin.getUserName()));
        user.setLoggedIn(false);
        user.setStatus("Pending");
        return AdminResponse.fromAdmin(adminRepo.save(user));
    }

    public AdminResponse getAdminDetailsByName(String name) {
        Admin user = adminRepo.findByUserName(name).orElseThrow(() -> new NoSuchElementException("Admin not found with userName: " + name));
        return AdminResponse.fromAdmin(adminRepo.save(user));
    }
}
