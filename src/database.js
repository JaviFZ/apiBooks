const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "Calzada99?",
        database : "appbooks"
    });


connection.connect(function (error) {
    if(error){
        console.log(error);
    } else {
        console.log('Conexion correcta');
    }
});


module.exports = connection;