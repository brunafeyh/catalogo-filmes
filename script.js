// main.js

// Função para lidar com o clique no botão "Entre em contato conosco"
function handleContactButtonClick() {
  alert("Clicou no botão 'Entre em contato conosco'!");
}

// Função para exibir um modal de detalhes do filme
function handleMovieDetailsClick(movieName) {
  alert("Clicou no filme: " + movieName);
  // Você pode implementar a lógica para exibir um modal com detalhes do filme aqui
}

// Localize o botão usando seu ID
const contactButton = document.getElementById("contact-button");

// Adicione um ouvinte de evento para lidar com o clique no botão "Entre em contato conosco"
if (contactButton) {
  contactButton.addEventListener("click", handleContactButtonClick);
}

// Localize todos os botões de detalhes do filme usando uma classe (substitua 'movie-details-button' pela classe correta)
const movieDetailsButtons = document.getElementsByClassName("movie-details-button");

// Adicione um ouvinte de evento para cada botão de detalhes do filme
for (let i = 0; i < movieDetailsButtons.length; i++) {
  movieDetailsButtons[i].addEventListener("click", function () {
    const movieName = movieDetailsButtons[i].getAttribute("data-movie-name");
    handleMovieDetailsClick(movieName);
  });
}
