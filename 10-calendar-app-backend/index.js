const express = require("express");
require('dotenv').config();

// create express server
const app = express();

// public directory 
app.use(express.static('public')); //path

// routes
// app.get("/", (req, res) => {
// 	res.json({
// 		ok: true
// 	})
// })

// listen to requests
app.listen(`${process.env.PORT}`, () => {
	console.log(`server running on port: ${process.env.PORT}`)
});