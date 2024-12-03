
# Guia de Contribuição 📝

Obrigado por considerar contribuir para o Sistema de Gerenciamento de Biblioteca! 🎉

## Como Contribuir

1. Faça um fork do repositório.
2. Crie um branch para sua feature ou correção de bug:  
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações.
4. Teste suas alterações localmente.
5. Faça um commit com uma mensagem clara e descritiva:  
   ```bash
   git commit -m "Adiciona nova funcionalidade X"
   ```
6. Envie suas alterações para o GitHub:  
   ```bash
   git push origin minha-feature
   ```
7. Abra um Pull Request no repositório original.

## Configurando o Ambiente de Desenvolvimento 🛠️

### Pré-requisitos

- Java 11+
- Maven 3.6+
- MySQL 8
- Docker (opcional)

### Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/Nycolas-Gabriel/library.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd library-api
   ```

3. Configure as variáveis de ambiente para conexão com o banco de dados no arquivo `pplication.propertiesa`.

## Padrões de Código 📏

- Siga as convenções de código Java recomendadas pelo [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html).
- Utilize comentários claros e concisos.
- Mantenha commits pequenos e específicos.

## Executando Testes 🧪

Para rodar os testes:
```bash
mvn test
```

## Reportando Problemas 🐞

Caso encontre um problema, abra uma issue detalhando:
- Passos para reproduzir.
- Comportamento esperado.
- Comportamento observado.
