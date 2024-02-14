package com.vinicius.crud.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Configuration
public class Conexao {
    
    @Value("${spring.datasource.url}")
    private String URL;

    @Value("${spring.datasource.username}")
    private String USUARIO;

    @Value("${spring.datasource.password}")
    private String SENHA;

    public Connection getConexao() throws SQLException {
        return DriverManager.getConnection(URL, USUARIO, SENHA);
    }
}

