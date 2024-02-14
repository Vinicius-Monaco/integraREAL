package com.vinicius.crud.model;


import java.time.LocalDate;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nome;

    private String email;

    // private String genero;
    @Enumerated(EnumType.STRING)
    private Genero genero; // Masculino, feminino, n-binario

    private String pais;

    private LocalDate dataNascimento;
}
