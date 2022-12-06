const connection = require("../database")

function getLibros(request, response)
{
    
    if(!request.query.id_libro ){
        let sql = `SELECT * FROM libro WHERE id_usuario='${request.query.id_usuario}'`;
        connection.query(sql, function (err, result)
        {
            if (err)
                console.log(err);
            else
            {
                response.send(result);
                // if(result.length>0){
                //     response.send(result[0])
                // } else {
                //     response.send({error:"Usuario no existe"});
                // }
            }    
        }) 
    }
    else{
        let sql = `SELECT * FROM libro WHERE id_usuario='${request.query.id_usuario}' AND id_libro='${request.query.id_libro}'`;
        connection.query(sql, function (err, result)
        {
            if (err)
                console.log(err);
            else
            {
                response.send(result);
                // if(result.length>0){
                //     response.send(result[0])
                // } else {
                //     response.send({error:"No se encuentran coincidencias"});
                // }
            }    
        }) 
    }
   
}



function postLibro(request, response)
{
    console.log(request.body);
    let sql = "INSERT INTO libro (id_usuario, titulo, tipo , autor, precio, foto)" +
                " VALUES ('" + request.query.id_usuario + "', '" +
                                request.body.titulo + "' , '" +
                                request.body.tipo + "' , '" +
                                request.body.autor + "' , '" +
                                request.body.precio + "' , '" +
                                request.body.foto + "')";

    // console.log(sql);
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



function putLibro(request, response)
{
    console.log(request.body);
    let params = [request.body.titulo, 
                  request.body.tipo, 
                  request.body.autor,
                  request.body.precio,
                  request.body.foto,
                  request.body.id_libro]

    let sql = "UPDATE libro SET titulo = COALESCE(?, titulo) , " + 
               "tipo = COALESCE(?, tipo) , " + 
               "autor = COALESCE(?, autor) , " + 
               "precio = COALESCE(?, precio) , " + 
               "foto = COALESCE(?, foto)  WHERE id_libro = ?";
    console.log(sql); 
    connection.query(sql, params, function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}


function deleteLibro(request, response)
{
    console.log(request.body);
    let sql = "DELETE FROM libro WHERE id_libro = '" + request.body.id_libro + "'";
    console.log(sql); 
    connection.query(sql, function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}





module.exports = {getLibros, postLibro,putLibro,deleteLibro};