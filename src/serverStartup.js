// This file runs app.listen() 
// to active and run the Express server 

// import the app from the other file 
const {app} = require("./serverConfiguration.js");

// call app.listen()
app.listen(3000, () => {
	console.log("Server has started, in its own file, on port 3000!");
});

// that's it!