package com.example.captivepbackend.entities;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "admins")
@NoArgsConstructor
public class Admin {

    @Id
    private String id;
    @NonNull
    private String userName;
    private String email;
    private String password;
    private String status;
    private boolean isLoggedIn;
}
