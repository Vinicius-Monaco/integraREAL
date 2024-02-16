package com.vinicius.crud.controller;

import org.springframework.web.bind.annotation.*;
import com.vinicius.crud.config.Conexao;
import com.vinicius.crud.model.Genero;
import com.vinicius.crud.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import java.sql.*;
import java.util.*;

@RestController
@RequestMapping("/API")
@CrossOrigin("*")
public class UsuarioController {

    @Autowired
    private Conexao conexao;

    @GetMapping("/USERS")
    public ResponseEntity<List<Usuario>> getAll() {
        List<Usuario> usuarios = new ArrayList<>();
        String querySQL = "SELECT * FROM USUARIO";
        try (Connection connection = conexao.getConexao();
                PreparedStatement ps = connection.prepareStatement(querySQL);
                ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                Usuario usuarioEncontrado = new Usuario();
                usuarioEncontrado.setId(rs.getLong("ID"));
                usuarioEncontrado.setNome(rs.getString("NOME"));
                usuarioEncontrado.setEmail(rs.getString("EMAIL"));
                usuarioEncontrado.setGenero(Genero.valueOf(rs.getString("GENERO")));
                usuarioEncontrado.setPais(rs.getString("PAIS"));
                usuarioEncontrado.setObservacoes(rs.getString("OBSERVACOES"));
                usuarios.add(usuarioEncontrado);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(usuarios);
    }

    @PutMapping("/EDIT/{id}")
    public ResponseEntity<String> editUsuario(@PathVariable Long id, @RequestBody Usuario usuario) {
        String querySQL = "UPDATE USUARIO SET NOME=?, EMAIL=?, GENERO=?, PAIS=?, OBSERVACOES=? WHERE ID=?";
        try (Connection connection = conexao.getConexao();
                PreparedStatement ps = connection.prepareStatement(querySQL)) {
            ps.setString(1, usuario.getNome());
            ps.setString(2, usuario.getEmail());
            ps.setString(3, usuario.getGenero().name());
            ps.setString(4, usuario.getPais());
            ps.setString(5, usuario.getObservacoes());
            ps.setLong(6, id);
            int linhasAtualizadas = ps.executeUpdate();
            if (linhasAtualizadas > 0) {
                return ResponseEntity.ok("SUCESSO");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("NÃO ENCONTRADO");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("ERRO: " + e.getMessage());
        }
    }

    @DeleteMapping("/DELETE/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable Long id) {
        String querySQL = "DELETE FROM USUARIO WHERE ID=?";
        try (Connection connection = conexao.getConexao();
                PreparedStatement ps = connection.prepareStatement(querySQL)) {
            ps.setLong(1, id);
            int linhasDeletadas = ps.executeUpdate();
            if (linhasDeletadas > 0) {
                return ResponseEntity.ok("USUÁRIO EXCLUÍDO");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("NÃO ENCONTRADO");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("ERRO: " + e.getMessage());
        }
    }

    @PostMapping("/CREATE")
    public ResponseEntity<String> createUser(@RequestBody Usuario usuario) {
        String querySQL = "INSERT INTO USUARIO (NOME, EMAIL, GENERO, PAIS, OBSERVACOES) VALUES (?, ?, ?, ?, ?)";
        try (Connection connection = conexao.getConexao();
                PreparedStatement ps = connection.prepareStatement(querySQL)) {
            ps.setString(1, usuario.getNome());
            ps.setString(2, usuario.getEmail());
            ps.setString(3, usuario.getGenero().name());
            ps.setString(4, usuario.getPais());
            ps.setString(5, usuario.getObservacoes());
            int linhasCriadas = ps.executeUpdate();
            if (linhasCriadas > 0) {
                return ResponseEntity.ok("SUCESSO");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("ERRO AO CRIAR");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("ERRO: " + e.getMessage());
        }
    }
}
