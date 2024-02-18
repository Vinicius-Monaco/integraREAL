# PRÉ-REQUISITOS
1. Node.js e npm instalados globalmente
2. Java Development Kit (JDK)
3. Maven

   
# CLONE O REPOSITÓRIO.
```bash
git clone https://github.com/Vinicius-Monaco/integraREAL.git
```



# EXECUÇÃO DO JAVA SPRING

1.Navegue até o repositório 'crud'.
```bash
cd integraREAL/"projeto integra"/crudrest/crud
```

2. Execute a aplicação Spring via terminal.
```bash
mvn spring-boot:run
```

3. A aplicação será rodada na porta 8080.
4. O endpoint para acessar o banco de dados h2 é: 'http://localhost:8080/h2-console', o usuário é: 'admin' e a senha é: '123'.
5. O endpoint para acessar o método CREATE é: 'http://localhost:8080/API/CREATE'.
6. O endpoint para acessar o método READ é: 'http://localhost:8080/API/USERS'.
7. O endpoint para acessar o método UPDATE é: 'http://localhost:8080/API/EDIT/{id}'.
8. O endpoint para acessar o método DELETE é: 'http://localhost:8080/API/DELETE/{id}'.


# EXECUÇÃO DO REACTJS

1. Volte até o diretório raiz do projeto e navegue até o repositório 'frontend'.
```bash
cd integraREAL/"projeto integra"/frontend
```

2. Execute 'npm install' para instalar as dependências.
```bash
npm install
```

3. Execute a aplicação ReactJS.
```bash
npm start
```

4. A aplicação será rodada na porta 3000 (http://localhost:3000)
