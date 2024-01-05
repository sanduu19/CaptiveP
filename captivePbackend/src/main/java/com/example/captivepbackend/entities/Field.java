package com.example.captivepbackend.entities;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
@Setter
@Document(collection = "fields")
public class Field {
    @Id
    private String id;
    private String name;
    private List<String> data;
}
