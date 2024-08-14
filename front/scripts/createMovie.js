//boton 1
//Seleccionamos los valores
//creamos los elemento html para cada propiedad
//verificamos que esten todos los espacios esten escritos
//insertamos los valores dentro de los elementos creados
//insertamos a los contenedores
//boton 2
//va a limpiar los espacios


function createMovie(){

    const checkBox = document.querySelectorAll('input[name="genre"]:checked');
    const docGenero = Array.from(checkBox).map(check => check.value)

     const docTitle = document.getElementById("title").value;
     const docPost = document.getElementById("post").value;
     const docYear = document.getElementById("year").value;
     const docDirector = document.getElementById("director").value;
     const docDuration = document.getElementById("duration").value;
     const docRate = document.getElementById("rate").value;
     

    
   if(docTitle === "" || docPost === "" || docYear === "" || docDirector === "" || docDuration === "" || docGenero.length === 0 || docRate === ""){
    
    alert("Faltan mas datos...")
   
   }else{

    const newMovie = {

        title: docTitle,
        year: docYear,
        director: docDirector,
        duration: docDuration,
        genre: docGenero,
        rate: docRate,
        poster: docPost
    }
    console.log("modulo createMovie")
    return newMovie;
    
   }
   

};




const cleanMovie = ()=>{
    
document.getElementById("title").value = "";
document.getElementById("year").value = "";
document.getElementById("director").value = "";
document.getElementById("duration").value = "";
document.getElementById("rate").value = "";
document.getElementById("post").value = "";

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
  checkbox.checked = false;
});
};

module.exports = {createMovie, cleanMovie};