import {homePage, sobrePage, adminPage, notFoundPage} from '../views/views.js';

export function routes(req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(homePage());
        return;
    }
    if (req.url === '/sobre') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(sobrePage());
        return;
    }
    if (req.url === '/admin') {
        res.writeHead(403, { 'Content-Type': 'text/html' });
        res.end(adminPage());
        return;
    }
    if (req.url === '/antigo') {
        res.writeHead(301, { 'Content-Type': 'text/html' , 'Location': '/sobre' });
        res.end('Página movida permanentemente para Sobre');
        return;
    }
    if(req.url === '/contato') {
        if(req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Contatos</h1>');
            return;
        }else if(req.method !== 'GET') {
            res.writeHead(405, { 'Content-Type': 'text/html', 'Allow': 'GET' });
            res.end('<h1>Erro 405 - Método não permitido</h1>');
            return;
        }
    }
    if (req.url.startsWith('/busca')) {
        if (req.url === '/busca?termo=javascript') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Busca por JavaScript</h1>');
    } else {
            res.writeHead(400, { 'Content-Type': 'text/html' });
            res.end('<h1>Erro 400 - Parâmetro inválido</h1>');
    }
    return;
}
    res.writeHead(404, {"content-type": "text/html"})
    res.end(notFoundPage())
}
