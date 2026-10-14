function layout(titulo, conteudo) {
  return `
    <!DOCTYPE html>
    <html lang="pt-br">
      <head><meta charset="UTF-8"><title>${titulo}</title></head>
      <body>
        <nav>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
        </nav>
        ${conteudo}
      </body>
    </html>
  `
}

export function homePage(){
    return layout ("Home", '<h1>Bem-vindo à página inicial</h1>')
}
export function sobrePage(){
    return layout ("Sobre", '<h1>Sobre nós</h1>')
}
export function contatoPage(){
    return layout ("Contato", '<h1>Entre em contato</h1>')
}
export function adminPage(){
    return layout ("Admin", '<h1>Acesso restrito</h1>')
}
export function notFoundPage(){
    return layout ("Não encontrado", '<h1>Página não encontrada</h1>')
}