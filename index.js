const form = document.querySelector("form");
const moviesname = document.querySelector("input");

form.onsubmit = (e) => {
  e.preventDefault();
  fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=d6727a0e9c7edd36258d4ee37b11fc0b&language=en-US&query=" +
      moviesname.value +
      "&page=1&include_adult=false"
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      names(result.results);
    });
};

function names(data) {
  data.forEach((movie) => {
    const image = document.createElement("img");
    image.src = "https://image.tmdb.org/t/p/original" + movie.poster_path;

    const head = document.createElement("h1");
    head.innerHTML = font(movie.original_title)

    const movieDiv = document.createElement("div");
    movieDiv.append(image);
    movieDiv.append(head);

    document.querySelector("#photo").append(movieDiv);
  });
}

function font(params) {
    if(params.length > 20){
        return params .slice(0,10)+"..."
    }
    else{return params}
    
}