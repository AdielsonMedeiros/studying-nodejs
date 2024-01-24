

const fs = require('fs')

console.log('inicio')

fs.writeFile('arquivo.txt', 'oi', function(err){
    setTimeout(function(){
        console.log('ArquivoCriado!')
    }, 1000)
})

console.log('fim')

// assincrono faz com que o codigo continue rodando enquanto o assincrono resolve suas coisas