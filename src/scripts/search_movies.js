const insertMovie = (movie) => {
  const html = `<li class="list-inline-item">
    <img src="${movie.Poster} alt="" style="width: 80px;">
  </li>`;
  results.insertAdjacentHTML('beforeend', html)
}

const handleData = (data) => {
  const movies = data.Search
  results.innerHTML = ""
  movies.forEach(insertMovie);
}

const callMoviesApi = (query) => {
  const apiUrl = `http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`
  fetch(apiUrl).then(response => response.json()).then(handleData);
}

const searchMovies = () => {
  // Selections
  const results           = document.querySelector('#results')
  const movieForm         = document.querySelector("#search-movies")
  const movieKeywordInput = document.querySelector('#keyword');

  // Call on load
  callMoviesApi("harry potter")

  // Listeners
  if (movieForm && results) {
    movieForm.addEventListener('submit', (event) => {
      event.preventDefault();
      callMoviesApi(movieKeywordInput.value);
    })
  }
}

export { searchMovies };
