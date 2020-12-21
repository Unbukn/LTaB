const path = require('path');
const express = require('express');
const routes = require('./routes'); //Requiring routes folder that can hold api and html routes
const app = express();
const passport = require("./config/passport"); // Requiring passport
const session = require("express-session"); // Requiring session for passport
const PORT = process.env.PORT || 3001;

// Passport config
app.use(session({
	secret: "partylater",
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
// *** Express Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// *** Static DIR
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
} else {
        app.use(express.static('client/public'));
} 

//API Routes
app.use(routes);


    // Init Server
	app.listen(PORT, () => {
		console.log(`Listening on PORT ${PORT}`);
	});
