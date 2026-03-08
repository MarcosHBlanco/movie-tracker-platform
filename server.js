const express = require("express");

const app = express();

const PORT = 3000;

app.get("/hello", (req, res) => {
	res.send("Hello from my backend server! **Updated");
});

app.get("/about", (req, res) => {
	res.send("This is my movie tracker backend!");
});

app.get("/movies", (req, res) => {
	const movies = [
		{ id: 1, title: "Inception", year: 2010 },
		{ id: 2, title: "Interestellar", year: 2014 },
	];

	res.json(movies);
});

app.post("/movies", (req, res) => {
	res.json({
		message: "Movie added succesfully",
	});
});

app.listen(PORT, () => {
	console.log(`Server runnin on port ${PORT}`);
});
