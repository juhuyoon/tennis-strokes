const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const PORT = 3001;
const app = express();

app.use(controllers);

// Connect to the database AND THEN run the server. 
sequelize.sync({}).then(() => {
    app.listen(PORT, () => {
        console.log("DAD WILL COME BACK SOON");
    })
});
