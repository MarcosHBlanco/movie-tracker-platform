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

app.listen(PORT, () => {
	console.log(`Server runnin on port ${PORT}`);
});
