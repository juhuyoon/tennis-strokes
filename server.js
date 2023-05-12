const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const PORT = 3001;
const app = express();
// const models = require("./models");
app.use(controllers);

// Connect to the database AND THEN run the server. 
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log("DAD WILL COME BACK SOON");
    })
});
