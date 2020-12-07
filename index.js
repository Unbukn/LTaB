// Dependencies
const express = require("express");
const db = require("./models");
const routes = require('./routes'); //Requiring routes folder that can hold api and html routes
const app = express();
// Server Port
const PORT = process.env.PORT || 8080;
// *** Express Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// *** Static DIR
app.use(express.static("public"));
//API Routes
app.use(routes);
// SYNC Sequelize
db.sequelize.sync({
	force: false
}).then(() => {
    // Init Server
	app.listen(PORT, () => {
		console.log(`Listening on PORT ${PORT}`);
	});
});