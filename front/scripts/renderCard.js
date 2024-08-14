
function renderMovie(movies){
movies.foreach((movie)=>{



    console.log("Modulo renderCard comunicandose")
    const container = document.getElementById("container");

    const card = document.createElement("div");
    const titleMovie = document.createElement("h4");
    const postMovie = document.createElement("img");
    const yearMovie = document.createElement("p");
    const directorMovie = document.createElement("p");
    const durationMovie = document.createElement("p");
    const generoMovie = document.createElement("p");
    const rateMovie = document.createElement("p");

    titleMovie.innerHTML = movie.title;
    postMovie.src = movie.poster;
    yearMovie.innerHTML = movie.year;
    directorMovie.innerHTML =movie.director;
    durationMovie.innerHTML = movie.duration;
    rateMovie.innerHTML = movie.rate;
    generoMovie.innerHTML = movie.genre;


    
    const cardOne = document.createElement("div");
    const cardBody = document.createElement("div");
    
   card.appendChild(postMovie);
   card.appendChild(cardBody)
   
   cardOne.appendChild(card);
   container.appendChild(cardOne);
   

   
   card.appendChild(titleMovie);
   card.appendChild(yearMovie);
   card.appendChild(directorMovie);
   card.appendChild(durationMovie);
   card.appendChild(rateMovie);
   card.appendChild(generoMovie);



    cardOne.classList.add("col-md-4");
    cardOne.classList.add("mt-5")
    card.classList.add("card");
    card.classList.add("custom-card");
    cardBody.classList.add("card-body");
  

    titleMovie.classList.add("card-title");
    postMovie.classList.add("card-img-top");
    yearMovie.classList.add("card-text");
    cardBody.appendChild(titleMovie);
    cardBody.appendChild(yearMovie);

})
}

module.exports = renderMovie;