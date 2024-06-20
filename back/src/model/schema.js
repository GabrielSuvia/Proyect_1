const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    title: String,

    year: Number,

    director: String,

    duration: String,

    genre: Array,

    rate: Number,

    poster: String,
});

module.exports = mongoose.model("movies",movieSchema)