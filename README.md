
# Sistema de Gerenciamento de Biblioteca 📚

Este é um projeto de API RESTful desenvolvido em Spring Boot para gerenciar uma biblioteca, permitindo o controle de usuários (leitores), livros e empréstimos.

## Funcionalidades Principais 🚀

- **CRUD de Livros**: 
  - Campos: título, autor, gênero, ano de publicação.

- **CRUD de Usuários**: 
  - Campos: nome, endereço, e-mail, telefone.

- **Registro de Empréstimos e Devoluções**: 
  - Limitação do número de empréstimos por usuário.
  - Marcação de datas de devolução.

- **Relatórios**:
  - Livros mais emprestados.
  - Lista de usuários com empréstimos pendentes.

## Tecnologias Utilizadas 🛠️

- **Java 11**
- **Spring Boot 2.2.6**
- **MySQL 8**
- **Docker**

## Como Executar o Projeto 🔧

### Pré-requisitos

- Java 11 ou superior.
- Maven 3.6+.
- Docker e Docker Compose.

### Executando Localmente

1. Clone o repositório:  
   ```bash
   git clone https://github.com/seu_usuario/library-api.git
   ```

2. Acesse o diretório do projeto:  
   ```bash
   cd library-api
   ```

3. Compile o projeto com Maven:  
   ```bash
   mvn clean install
   ```

4. Execute o projeto:  
   ```bash
   mvn spring-boot:run
   ```

### Executando com Docker

1. Construa as imagens Docker:  
   ```bash
   docker-compose build
   ```

2. Inicie os containers:  
   ```bash
   docker-compose up
   ```

3. Acesse a API em: `http://localhost:8080`.

## Endpoints Básicos 🔗

- **GET** `/api/livros` - Lista todos os livros.
- **POST** `/api/livros` - Adiciona um novo livro.
- **GET** `/api/usuarios` - Lista todos os usuários.
- **POST** `/api/usuarios` - Adiciona um novo usuário.
- **POST** `/api/emprestimos` - Registra um novo empréstimo.

## Futuras Funcionalidades 🔮

- Integração com sistema de notificações para lembretes de devolução.
- Dashboard com métricas e estatísticas.

## Licença 📄

Este projeto está sob a licença MIT.

---

## Contato 📧

Em caso de dúvidas ou sugestões, entre em contato:  
[Seu e-mail ou GitHub](https://github.com/seu_usuario).
