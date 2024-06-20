//const axios = require("axios");
const movieSchema = require("../model/schema")

module.exports = {
    getMovie: async()=>{

     //const movie = axios.get("https://students-api.up.railway.app/movies");
     
     //return movie;    Eliminar??
        const movie = await movieSchema.find();

        return movie;
    },
createMovie: async(movies) => {
    
       const movie = await movieSchema.create(movies);
       return movie;
}

}
