
# Sistema de Gerenciamento de Biblioteca 📚

Este é um sistema de gerenciamento de biblioteca desenvolvido em **Java** com **Spring Boot**, que permite realizar o cadastro de usuários, gerenciamento de livros, e controle de empréstimos e devoluções.

## Funcionalidades 🔧

- **Gerenciamento de Usuários**:
  - Cadastro de usuários com nome de usuário único.
  - Criptografia de senha com `BCrypt`.
  - Controle de permissões de acesso.

- **Gerenciamento de Livros**:
  - Cadastro, atualização e listagem de livros.
  - Registro de quantas vezes um livro foi emprestado.

- **Empréstimo de Livros**:
  - Solicitação de empréstimo de livros com data de devolução automática (5 dias).
  - Registro de logs para cada empréstimo realizado.
  - Devolução de livros com atualização automática no banco de dados.

- **Endereços**:
  - Cadastro de endereços vinculados aos usuários.

## Tecnologias Utilizadas 🛠️

- **Java 11+**
- **Spring Boot**
- **Hibernate** (JPA)
- **Banco de Dados MySQL** (ou PostgreSQL)
- **Spring Security** (para autenticação)
- **Lombok** (para reduzir boilerplate de código)
- **Jackson** (para serialização/deserialização JSON)

## Estrutura do Projeto 📂

```text
src/
├── main/
│   ├── java/com/library/api/library_api/
│   │   ├── controller/         # Controllers da API REST
│   │   ├── model/              # Entidades do banco de dados
│   │   ├── repository/         # Repositórios do JPA
│   │   └── service/            # Lógica de negócios
└── resources/
    └── application.properties  # Configurações da aplicação
```

### Executando Localmente

1. Clone o repositório:  
   ```bash
   git clone https://github.com/Nycolas-Gabriel/library.git
    ```
   
2. Acesse o diretório do projeto:  
   ```bash
   cd library-api
   ```
   
3. Configure o banco de dados no arquivo application.yml.
   
4. Compile o projeto com Maven:  
   ```bash
   mvn clean install
   ```
   
5. Execute o projeto:  
   ```bash
   mvn spring-boot:run
   ```

### Executando com Docker

1. Acesse o diretório do projeto:  
   ```bash
   cd library-api
   ```
2. Configure o banco de dados no arquivo docker-compose.yml.
   
3. Construa as imagens Docker e Inicie os containers:  
   ```bash
   docker-compose up --build -d
   ```

4. Acesse a API em: `http://localhost:8080`.

## Endpoints Básicos 🔗

# Usuário
- **POST** /library/api/usuario/cadastrar: Cadastrar um novo usuário.

# Livros
- **POST** /library/api/livro/criar: Cadastrar um novo livro.
- **GET** /library/api/livro/listar: Listar todos os livros.
- **GET** /library/api/livro/lista-livros-mais-alugados: Listar livros mais alugados.

# Empréstimos
- **POST** /library/api/emprestimo/solicitar-emprestimo: Solicitar um empréstimo.
- **DELETE** /library/api/emprestimo/devolver-emprestimo: Devolver um livro.

## Futuras Funcionalidades 🔮

- Integração com sistema de notificações para lembretes de devolução.
- Dashboard com métricas e estatísticas.

## Licença 📄

CC BY.

---

## Contato 📧

Em caso de dúvidas ou sugestões, entre em contato:  
[Nycolas](https://github.com/Nycolas-Gabriel).

[Edson](https://github.com/Edsoonjr).

[Geovanna](https://github.com/GiMarrocos).

[Giovana](https://github.com/glopes2003).

[Dayvson](https://github.com/dayvson-henriquee).
