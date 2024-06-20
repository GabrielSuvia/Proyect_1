const {Router} = require("express");
const route = Router();
const movieController = require("../controllers/movieController");

route.get("/",movieController.getMovies);
route.post("/",movieController.createMovies)

module.exports = {route}