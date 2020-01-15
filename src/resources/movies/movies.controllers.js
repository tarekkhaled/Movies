const Movie = require('./movies.model');
const MovieModel = new Movie ;

/** controller for api (get '/movies/') */
export const getAllMovies = (req,res,next) => {
    res.json({data : MovieModel.getAllMovies()});
}

/** controller for api (get '/movies/topRated') */
export const getTopRatedMovies = (req,res,next) => {
    res.json({data : MovieModel.getTopRatedMovies()});
}

/** controller for api (get '/movies/:id') */
export const getOneMovie = (req,res,next) => {
    res.json({data : MovieModel.getMovieByID(req.params.movieID)});
}

/** controller for api (post '/movies/') */
export const addNewMovie = (req,res,next) => {
    MovieModel.addNewMovie(req.body);
    res.json({message : 'Add movie to our database successfuly'});
}

/** controller for api (put '/movies/:id') */
export const updateMovie = (req,res,next) => {
    MovieModel.updateMovieByID(req.params.movieID,req.body);
    res.json({message : 'update movie from our database successfuly'});
}
/** controller for api (delete '/movies/:id') */
export const deleteMovie = (req,res,next) => {
    MovieModel.deleteMovieByID(req.params.movieID);
    res.json({message : 'delete movie from our database successfuly'})
}


