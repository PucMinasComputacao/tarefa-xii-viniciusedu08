const API_KEY = "4279ac7865ad09bdbfda57013c99fff5";

const BASE_URL =
  "https://api.themoviedb.org/3";

const IMAGE_URL =
  "https://image.tmdb.org/t/p/w500";

const movieList =
  document.getElementById("movie-list");

const message =
  document.getElementById("message");

const searchInput =
  document.getElementById("search");

const btnSearch =
  document.getElementById("btnSearch");



async function fetchMovies(query = "") {

  try {

    showMessage("Carregando filmes...");

    let url = "";

    if (query) {

      url =
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`;

    } else {

      url =
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`;

    }

    const response =
      await fetch(url);

    const data =
      await response.json();

    showMessage("");

    return data.results;

  } catch (error) {

    console.error(error);

    showMessage("Erro ao carregar filmes.");

    return [];
  }
}



function createMovieCard(movie) {

  const card =
    document.createElement("div");

  card.classList.add("movie-card");



  const poster =
    document.createElement("img");

  poster.src =
    movie.poster_path
      ? `${IMAGE_URL}${movie.poster_path}`
      : "https://via.placeholder.com/500x750?text=Sem+Imagem";



  const info =
    document.createElement("div");

  info.classList.add("movie-info");



  const title =
    document.createElement("h2");

  title.textContent =
    movie.title;



  const year =
    document.createElement("p");

  year.textContent =
    `Ano: ${
      movie.release_date
        ? movie.release_date.split("-")[0]
        : "Não informado"
    }`;



  const rating =
    document.createElement("p");

  rating.classList.add("rating");

  rating.textContent =
    `⭐ Nota: ${movie.vote_average}`;



  const overview =
    document.createElement("p");

  overview.textContent =
    movie.overview
      ? movie.overview.substring(0, 120) + "..."
      : "Sinopse não disponível.";



  info.appendChild(title);
  info.appendChild(year);
  info.appendChild(rating);
  info.appendChild(overview);

  card.appendChild(poster);
  card.appendChild(info);

  return card;
}



function renderMovies(movies) {

  movieList.innerHTML = "";

  if (movies.length === 0) {

    showMessage("Nenhum filme encontrado.");

    return;
  }

  showMessage("");

  movies.forEach((movie) => {

    const card =
      createMovieCard(movie);

    movieList.appendChild(card);

  });
}



function showMessage(text) {

  message.textContent = text;

}



async function init() {

  const movies =
    await fetchMovies();

  renderMovies(movies);

}



btnSearch.addEventListener("click", async () => {

  const query =
    searchInput.value.trim();

  const movies =
    await fetchMovies(query);

  renderMovies(movies);

});



searchInput.addEventListener("keypress", async (event) => {

  if (event.key === "Enter") {

    const query =
      searchInput.value.trim();

    const movies =
      await fetchMovies(query);

    renderMovies(movies);
  }
});



init();