let movies = [];

exports.getMovies = (req, res) => {
	res.json(movies);
};

exports.getMovieById = (req, res) => {
	const movieId = parseInt(req.params.id);

	const movie = movies.find((m) => m.id === movieId);

	if (!movie) {
		return res.status(404).json({ message: "Movie not found" });
	}

	res.json(movie);
};

exports.createMovie = (req, res) => {
	const newMovie = {
		id: movies.length + 1,
		...req.body,
	};

	movies.push(newMovie);

	res.status(201).json({
		message: "Movie created",
		movie: newMovie,
	});
};

exports.deleteMovie = (req, res) => {
	const movieId = parseInt(req.params.id);

	const movieIndex = movies.findIndex((m) => m.id === movieId);

	if (movieIndex === -1) {
		return res.status(404).json({ message: "Movie not found" });
	}

	movies.splice(movieIndex, 1);

	res.status(201).json({ message: "Movie deleted" });
};
