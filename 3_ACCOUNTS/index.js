// modulos externos





// modulos internos
const fs = require('fs')

operation()

async function operation(){
    let inquirer = (await import('inquirer')).default
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices:['Criar conta','Consultar saldo','Depositar','Sacar','Sair'],
    },
]).then(answer => {
    const action = answer['action']
    console.log(action)
})
.catch((err)=> console.log(err))
}
