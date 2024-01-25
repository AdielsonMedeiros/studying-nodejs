// Importa o módulo HTTP do Node.js para criar o servidor HTTP
const http = require("http")
// Importa o módulo 'fs' (File System) do Node.js para ler arquivos do sistema
const fs = require('fs')

// Define a porta em que o servidor irá rodar
const port = 3000

// Cria um servidor HTTP
const server = http.createServer((req, res) => {

    // Lê o arquivo 'mensagem.html'
    fs.readFile('mensagem.html', function (err, data) {
        // Define o código de status da resposta como 200 (OK) e o tipo de conteúdo como HTML
        res.writeHead(200, {'Content-Type': 'text/html'})
        // Escreve os dados lidos do arquivo 'mensagem.html' na resposta
        res.write(data)
        // Finaliza a resposta
        return res.end()
    })
})

// Inicia o servidor na porta definida
server.listen(port, () =>{
    // Exibe uma mensagem no console informando que o servidor está rodando
    console.log(`Servidor rodando na porta: ${port}`)
})