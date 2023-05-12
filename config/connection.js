const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
// THIS IF STATEMENT IS NECESSARY TO DEPLOY MY DATABASE TO THE INTERNET
if(process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // THIS IS THE NORMAL SEQUELIZE CALL TO CONNECT TO MY DATABASE IN MY COMPUTER. 
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD, 
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306 //THIS IS WHERE MY DATABASE LIVES IN MY COMPUTER. 
        }
    )
};

module.exports = sequelize;