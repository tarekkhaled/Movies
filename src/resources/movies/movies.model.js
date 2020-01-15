let moviesDB = require('../../database/movies.db');
class Movie {
    getAllMovies(){ 
        return moviesDB;   
    }
    getMovieByID(id){
        return moviesDB.find(movie => movie.id == id) ;
    }
    getTopRatedMovies(){
        return moviesDB.filter(movie => movie.vote_average >= 8);
    }
    addNewMovie(movie){ 
        moviesDB.push(movie); 
    }
    updateMovieByID(id,newMovie){
        const indexOfMovie = moviesDB.findIndex(movie => movie.id == id);
        moviesDB[indexOfMovie] = newMovie; 
    }
    deleteMovieByID(id){
        const indexOfMovie = moviesDB.findIndex(movie => movie.id == id);
        moviesDB.splice(indexOfMovie,1)
    }
}


module.exports = Movie;