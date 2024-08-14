const movieService = require("../services/movieService");
module.exports = {
   // controllerMovie: (req,res)=>{
     //   res.status(200).send("Pronto se mostraran las peliculas")
        //console.log("estamos solicitando movie");
    getMovies: async (req,res)=>{
      
      try{
        
        const movie = await movieService.getMovie();
        res.status(200).json(movie)
      
      }catch(error){
         res.status(500).json({error:"error al obtener los datos"})
      }
    },
    createMovies:async (req,res)=>{
      try {
        
        const  movie= req.body
       const newMovie = await movieService.createMovie(movie)
       res.status(201).json(newMovie)

      } catch (error) {
        res.status(400).json({error:"error al publicar los datos"})
      }
        
    }
}

//{title, year, director, duration, genre, rate, poster }