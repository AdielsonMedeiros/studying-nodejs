

const fs = require("fs")

console.log("inicio")

fs.writeFileSync('arquivo.txt', 'oi')

console.log('Fim')

// o sincrono só vai ir pra outra linha de codigo se ele já estiver pronto ou feito, para que os outros mantenham a sincronia