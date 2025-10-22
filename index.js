const http = require('http');
const port = 3000;
const os = require('os');

const servidor = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Mi primer servidor</h1>');
});

servidor.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}/`);
  console.log(`Nombre del host: ${os.hostname()}`);
  console.log("Versión de Node.js: " + process.version);
});