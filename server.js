const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
// We need this to deploy to the server so that it BINDS to the nearest available port number
const PORT = process.env.PORT || 3001;
const app = express();

// To access the public/front-end content!
app.use(express.static('public'));

// TO USE HANDLEBARSSSSSSSSS
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");

// THIS IS NEEDED TO DO POST REQUESTS!!!
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
// const models = require("./models");
app.use(controllers);

// Connect to the database AND THEN run the server. 
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log("DAD WILL COME BACK SOON");
    })
});
