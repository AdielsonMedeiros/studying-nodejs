// Importa o módulo HTTP do Node.js para criar o servidor HTTP
const http = require("http")
// Importa o módulo 'fs' (File System) do Node.js para ler arquivos do sistema
const fs = require('fs')

// Define a porta em que o servidor irá rodar
const port = 3000

// Cria um servidor HTTP
const server = http.createServer((req, res) => {
    // Importa o módulo 'url' do Node.js e analisa a URL da solicitação
    const urlInfo = require('url').parse(req.url, true)
    // Obtém o valor do parâmetro 'name' na URL
    const name = urlInfo.query.name

    // Se o parâmetro 'name' não estiver presente na URL
    if (!name) {
        // Lê o arquivo 'index.html'
        fs.readFile('index.html', function (err, data) {
            // Define o código de status da resposta como 200 (OK) e o tipo de conteúdo como HTML
            res.writeHead(200, {'Content-Type': 'text/html'})
            // Escreve os dados lidos do arquivo 'mensagem.html' na resposta
            res.write(data)
            // Finaliza a resposta
            return res.end()
        })
    } else{

        const nameNewLine =  name + ',\r\n'


        // Se o parâmetro 'name' estiver presente, escreve o valor em 'arquivo.txt'
        fs.appendFile("arquivo.txt", nameNewLine, function(err,data) {
            // Redireciona o usuário para a página inicial
            res.writeHead(302,{
                location: "/",
            })
            return res.end()
        })
    }
})

// Inicia o servidor na porta definida
server.listen(port, () =>{
    // Exibe uma mensagem no console informando que o servidor está rodando
    console.log(`Servidor rodando na porta: ${port}`)
})
