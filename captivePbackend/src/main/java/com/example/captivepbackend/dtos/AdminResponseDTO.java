package com.example.captivepbackend.dtos;

import com.example.captivepbackend.entities.Admin;

public record AdminResponseDTO(
        String id,
        String userName,
        String email,
        String status,
        boolean isLoggedIn
) {
    public static AdminResponseDTO fromAdmin(Admin admin) {
        return new AdminResponseDTO(
                admin.getId(),
                admin.getUserName(),
                admin.getEmail(),
                admin.getStatus(),
                admin.isLoggedIn()
        );
    }
}
