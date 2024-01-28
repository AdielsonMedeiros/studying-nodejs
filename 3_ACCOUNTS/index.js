// modulos externos


import chalk from 'chalk'
import fs from 'fs'


// modulos internos

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
    
    if(action === 'Criar conta'){
        createAccount()
    }
})
.catch((err)=> console.log(err))
}

// criar uma conta 

function createAccount(){
    console.log(chalk.bgGreen.black('Parabéns por escolher esse banco ruim!'))
    console.log(chalk.green('Defina as opções da sua conta zé mané'))
}
