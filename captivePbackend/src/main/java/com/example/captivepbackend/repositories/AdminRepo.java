package com.example.captivepbackend.repositories;

import com.example.captivepbackend.entities.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface AdminRepo extends MongoRepository<Admin, String> {
    Optional<Admin> findByUserName(String userName);
}
