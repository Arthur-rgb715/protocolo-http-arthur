import http from 'http';
import {routes} from './routes/routes.js';

const server = http.createServer((req, res) => {
  routes(req, res);
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/');
});