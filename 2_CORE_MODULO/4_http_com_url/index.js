


// Importa o módulo HTTP do Node.js
const http = require("http")

// Define a porta em que o servidor irá rodar
const port = 3000

// Cria um servidor HTTP
const server = http.createServer((req, res) => {

    // Analisa a URL da requisição e retorna um objeto com informações sobre a URL
    const urlInfo = require('url').parse(req.url, true)
    // Extrai o valor do parâmetro 'name' da URL
    const name = urlInfo.query.name

    // Define o código de status da resposta como 200 (OK)
    res.statusCode = 200
    // Define o tipo de conteúdo da resposta como HTML
    res.setHeader('Contenty-Type', 'text/html')

    // Se o parâmetro 'name' não estiver presente na URL
    if(!name){
        // Envia uma resposta com um formulário HTML para o usuário preencher o nome
        res.end('<h1>Preencha o seu nome: </h1><form method="GET"><input type="text" name="name"/><input type="submit" value="Enviar" /></form>')
    }else{
        // Se o parâmetro 'name' estiver presente na URL, envia uma mensagem de boas-vindas
        res.end(`<h1>Seja bem-vindo ${name}! </h1>`)
    }
    
})

// Inicia o servidor na porta definida
server.listen(port, () =>{
    // Exibe uma mensagem no console informando que o servidor está rodando
    console.log(`Servidor rodando na porta: ${port}`)
})
