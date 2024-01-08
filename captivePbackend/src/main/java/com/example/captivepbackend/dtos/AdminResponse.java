package com.example.captivepbackend.dtos;

import com.example.captivepbackend.entities.Admin;

public record AdminResponse(
        String id,
        String userName,
        String email,
        String status,
        boolean isLoggedIn
) {
    public static AdminResponse fromAdmin(Admin admin) {
        return new AdminResponse(
                admin.getId(),
                admin.getUserName(),
                admin.getEmail(),
                admin.getStatus(),
                admin.isLoggedIn()
        );
    }
}
