const movieModel = require("../models/movieModels");

exports.getMovies = (req, res) => {
	const movies = movieModel.getAllMovies();
	res.json(movies);
};

exports.getMovieById = (req, res) => {
	const movieId = parseInt(req.params.id);

	const movie = movieModel.getMovieById(movieId);

	if (!movie) {
		return res.status(404).json({ message: "Movie not found" });
	}

	res.json(movie);
};

exports.createMovie = (req, res) => {
	const newMovie = movieModel.createMovie(req.body);

	res.status(201).json({
		message: "Movie created",
		movie: newMovie,
	});
};

exports.deleteMovie = (req, res) => {
	const movieId = parseInt(req.params.id);

	const deleted = movieModel.deleteMovie(movieId);

	if (!deleted) {
		return res.status(404).json({ message: "Movie not found" });
	}

	res.status(201).json({ message: "Movie deleted" });
};
