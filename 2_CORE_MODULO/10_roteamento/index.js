// Importa o módulo HTTP do Node.js para criar o servidor HTTP
const http = require("http")
// Importa o módulo 'fs' (File System) do Node.js para ler arquivos do sistema
const fs = require('fs')
const url = require('url')

// Define a porta em que o servidor irá rodar
const port = 3000


// Cria um servidor HTTP
const server = http.createServer((req, res) => {
    // Importa o módulo 'url' do Node.js e analisa a URL da solicitação
    const q = require('url').parse(req.url, true)
    // Obtém o valor do parâmetro 'name' na URL
    const filename = q.pathname.substring(1)



    // Se o parâmetro 'name' não estiver presente na URL
    if (filename.includes('html')){ // Verifica se o nome do arquivo contém 'html'
        if(fs.existsSync(filename)){ // Verifica se o arquivo existe
            fs.readFile(filename , function(err, data){ // Lê o arquivo
                res.writeHead(404,{'Content-Type': 'text/html'}) // Define o cabeçalho da resposta como 'text/html' e o status da resposta como 404
                res.write(data) // Escreve os dados do arquivo na resposta
                return res.end() // Termina a resposta
            })
        } else{ // Se o arquivo não existir
            // se nao vai ter que renderizar a pagian 404
            fs.readFile( '404.html' , function(err, data){ // Lê o arquivo '404.html'
                res.writeHead(200,{'Content-Type': 'text/html'}) // Define o cabeçalho da resposta como 'text/html' e o status da resposta como 200
                res.write(data) // Escreve os dados do arquivo na resposta
                return res.end() // Termina a resposta
            })
        }
    }
})


    

// Inicia o servidor na porta definida
server.listen(port, () =>{
    // Exibe uma mensagem no console informando que o servidor está rodando
    console.log(`Servidor rodando na porta: ${port}`)
})
