const apiUrlGetBooks = "http://localhost:8080/library/api/livro/listar";
const apiUrlCreateBook = "http://localhost:8080/library/api/livro/criar";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzM4ODU5ODksInVzZXJfbmFtZSI6ImxpYnJhcnkiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiNGQ3YTU2ZDMtYzE0Mi00N2FlLWE3NzctMThhMmJiNjhmNDg3IiwiY2xpZW50X2lkIjoibGlicmFyeWFwaSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdfQ.tiqISFiZVuV5EBenMSolONxUD8hqk3Xey-hlUNMKlqg";


// Função para carregar livros
// Função para carregar livros
function loadBooks() {
  fetch(apiUrlGetBooks, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const bookList = document.getElementById("book-list");
      bookList.innerHTML = ""; // Limpa a lista antes de adicionar os livros

      if (Array.isArray(data)) {
        data.forEach((book) => {
          const listItem = document.createElement("li");
          listItem.classList.add("book-item");

          // Extrai apenas o ano da data no formato 'dd/MM/yyyy'
          const year = book.anoPublicacao.split("/")[2]; // Pega o ano (parte após o segundo "/")

          // Exibe o livro com o ano
          listItem.textContent = `${book.titulo} - ${book.autor} (${book.genero}, ${year})`;
          bookList.appendChild(listItem);
        });
      } else {
        console.error("Erro: Dados não são uma lista.", data);
      }
    })
    .catch((error) => console.error("Erro ao carregar livros:", error));
}


// Função para cadastrar livro
document.getElementById("book-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const year = document.getElementById("year").value; // Formato 'YYYY-MM-DD'

  // Converte para o formato 'dd/MM/yyyy'
  function formatDateToBackend(date) {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  }

  const newBook = {
    titulo: title,
    autor: author,
    genero: genre,
    anoPublicacao: formatDateToBackend(year),
  };

  console.log("Objeto enviado para o backend:", newBook);

  fetch(apiUrlCreateBook, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data && data.titulo) {
        console.log("Livro cadastrado com sucesso:", data);
        loadBooks(); // Atualiza a lista após cadastro
      } else {
        console.error("Erro ao cadastrar livro:", data);
      }
    })
    .catch((error) => console.error("Erro ao cadastrar livro:", error));
});

// Carregar livros ao iniciar
window.onload = loadBooks;
