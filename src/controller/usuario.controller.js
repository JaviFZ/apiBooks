const connection = require("../database")


function postRegistro (request, response)
{
    console.log(request.body);
    let sql = "INSERT INTO usuario (nombre, apellidos , correo, foto, password)" +
                " VALUES ('" + request.body.nombre + "', '" +
                                request.body.apellidos + "' , '" +
                                request.body.correo + "' , '" +
                                request.body.foto + "' , '" +
                                request.body.password + "')";

    console.log(sql);
    connection.query(sql, function (err, result) 
    {
        if(err)
            console.log(err);
        else
        {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId));
            else
            {
                response.send("-1");
            }
        }        
    })
}

function postLogin(request, response) 
{
    let sql;
    if (request.query.id == null)
        sql = "SELECT * FROM studients";
    else
        sql = "SELECT * FROM studients WHERE id_studient=" + request.query.id;
     
    connection.query(sql, function (err, result)
    {
        if (err)
            console.log(err);
        else
        {
            response.send(result);
        }    
    })  
};

module.exports = {postRegistro, postLogin};