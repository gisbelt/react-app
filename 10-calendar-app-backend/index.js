const express = require("express");
// create express server
const app = express()

// routes
app.get("/", (req, res) => {
	res.json({
		ok: true
	})
})

// listen to requests
const port = 4000;
app.listen(`${port}`, () => {
	console.log(`server running on port: ${port}`)
} )