const http = require('http');
const port = 3000;

const servidor = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Mi primer servidor</h1>');
});

servidor.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}/`);
});