let movies = [];
let nextId = 1;

exports.getAllMovies = () => {
	return movies;
};

exports.getMovieById = (id) => {
	return movies.find((m) => m.id === id);
};

exports.createMovie = (movieData) => {
	const newMovie = {
		id: nextId,
		...movieData,
	};

	movies.push(newMovie);
	nextId++;

	return newMovie;
};

exports.deleteMovie = (id) => {
	const movieIndex = movies.findIndex((m) => m.id === id);

	if (movieIndex === -1) {
		return false;
	}

	movies.splice(movieIndex, 1);

	return true;
};

exports.updateMovie = (id, movieData) => {
	const movie = movies.find((movie) => movie.id === id);

	if (!movie) {
		return null;
	}

	movie.title = movieData.title;
	movie.year = movieData.year;

	return movie;
};
