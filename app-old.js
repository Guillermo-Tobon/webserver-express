const http = require('http');

//crear el servidor
http.createServer( (req, res) =>{

  res.writeHead(200, {'Content-Type': 'application/json'});

  let salida = {
    nombre: 'memo',
    apellido: 'tobon',
    edad: '35',
    telefono: '3134455656',
    url: req.url
  }

  res.write(JSON.stringify(salida));

  res.end();
  
}).listen(8080);

console.log('escuchando el puerto 8080');
