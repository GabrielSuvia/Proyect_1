//const renderMovie = require("./renderCard.js");
const axios = require("axios");
const {createMovie, cleanMovie} = require("./createMovie.js")

const main = ()=>{
    
  
     axios.post("http://localhost:3000/movies",createMovie())
    //const response = await axios.get("http://localhost:3000/movies");
   // renderMovie(response.data);
   console.log(response.data)

  

}



const selecData = document.getElementById("btn-1");
selecData?.addEventListener("click", (e)=>{

    e.preventDefault();
   console.log("pelicula guardada...")
  

});


const deleteData = document.getElementById("btn-2");
deleteData?.addEventListener("click",(e)=>{

    e.preventDefault();
    cleanMovie();
    console.log("eliminar");
});

main();



/*
const main = async()=>{
     const movie =  createMovie();
     try {
        const respons = await axios.post("http://localhost:3000/movies",movie)
       renderMovie(obj)
         console.log("movie sended...");

     } catch (error) {
        error=>{
            console.error('error:',error);
     }
    
    }
   
};



/*
try {
    $.getJSON("https://students-api.up.railway.app/movies",(data,status)=> {
    
        renderCard(data);
        });
    
} catch (error) {
    console.error('Error:', error);
}
*/
