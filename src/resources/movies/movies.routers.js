const express = require('express')
const router = express.Router();

// just a placeholder and i will replace it later
const controller = (req,res,next) => {
    res.json({name : 'adel shakel'})
}
// for route /movies/
router.route('/')
    .get(controller) // return list of movies with pages
    .post(controller) // will add the movie to the list

// for route /movies/top_rated
router.route('/top_rated')
    .get(controller) // will get top_rated 

// for route /movies/:id
router.route('/:movieID')
    .get(controller) // will just return one movie -- R
    .put(controller) // will just update the movie -- U
    .delete(controller) // will delete the movie -- D


module.exports = router;