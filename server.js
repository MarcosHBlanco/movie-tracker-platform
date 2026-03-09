const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let movies = [];

app.get("/hello", (req, res) => {
	res.send("Hello from my backend server! **Updated");
});

app.get("/about", (req, res) => {
	res.send("This is my movie tracker backend!");
});

app.get("/movies", (req, res) => {
	res.json(movies);
});

app.get("/movies/:id", (req, res) => {
	const movieId = parseInt(req.params.id);

	const movie = movies.find((m) => m.id === movieId);

	if (!movie) {
		return res.status(404).json({
			message: "Movie not found",
		});
	}
	res.json(movie);
});

app.post("/movies", (req, res) => {
	const newMovie = {
		id: movies.length + 1,
		...req.body,
	};

	movies.push(newMovie);

	res.json({
		message: "Movie received",
		movie: newMovie,
	});
});

app.delete("/movies/:id", (req, res) => {
	const movieId = parseInt(req.params.id);

	const movieIndex = movies.findIndex((m) => m.id === movieId);

	if (movieIndex === -1) {
		return res.status(404).json({
			message: "Movie not found",
		});
	}
	movies.splice(movieIndex, 1);

	res.json({
		message: "Movie deleted succesfully",
	});
});

app.listen(PORT, () => {
	console.log(`Server runnin on port ${PORT}`);
});
