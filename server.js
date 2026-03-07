const express = require("express");

const app = express();

const PORT = 3000;

app.get("/hello", (req, res) => {
	res.send("Hello from my backend server! **Updated");
});

app.get("/about", (req, res) => {
	res.send("This is my movie tracker backend!");
});

app.listen(PORT, () => {
	console.log(`Server runnin on port ${PORT}`);
});
