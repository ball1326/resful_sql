const mysql = require('mysql');
const dbConfig = require("../config/dbconfig");

//create a Connection to the database server
const Connection = mysql.createConnection({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASSWORD,
    database:dbConfig.DB,
});

// open MY SQL Connection

Connection.connect(
    (error)=>{
        if(error) throw error;
        console.log("SuccessFully connected to the database .....")
    }
);

module.exports = Connection;