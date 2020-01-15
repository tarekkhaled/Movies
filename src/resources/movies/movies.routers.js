const express = require('express')
const router = express.Router();
import {
    getAllMovies,
    getOneMovie,
    getTopRatedMovies,
    addNewMovie,
    updateMovie,
    deleteMovie} 
from './movies.controllers';

// for route /movies/
router.route('/')
    .get(getAllMovies) // return list of movies with pages
    .post(addNewMovie) // will add the movie to the list

// for route /movies/top_rated
router.route('/topRated')
    .get(getTopRatedMovies) // will get top_rated 

// for route /movies/:id
router.route('/:movieID')
    .get(getOneMovie) // will just return one movie -- R
    .put(updateMovie) // will just update the movie -- U
    .delete(deleteMovie) // will delete the movie -- D


module.exports = router;