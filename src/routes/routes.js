import {homePage, sobrePage, adminPage} from '../views/views.js';

export function routes(req, res) {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(homePage());
    }
    if (req.url === '/sobre' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(sobrePage());
    }
    if (req.url === '/admin' && req.method === 'GET') {
        res.writeHead(403, { 'Content-Type': 'text/html' });
        res.end(adminPage());
    }
    if (req.url === '/antigo' && req.method === 'GET') {
        res.writeHead(301, { 'Content-Type': 'text/html' , 'Location': '/sobre' });
        res.end('Página movida permanentemente para Sobre');
    }
}