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
	const { title, year } = req.body;

	//validation: title must exist
	if (!title) {
		return res.status(400).json({
			message: "Movie is required",
		});
	}

	//validation: title must be a string
	if (typeof title !== "string") {
		return res.status(400).json({
			message: "Title must be a string",
		});
	}

	//validation: year must exist
	if (!year) {
		return res.status(400).json({
			message: "Year is required",
		});
	}

	//validation: year must be a number
	if (typeof year !== "number") {
		return res.status(400).json({
			message: "Year must be a number",
		});
	}

	const newMovie = movieModel.createMovie({ title, year });

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
