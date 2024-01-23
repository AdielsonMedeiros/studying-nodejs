import chalk from 'chalk';

const nota = 6;

if(nota >= 7){
    console.log(chalk.green.bold('Parabéns! Você está aprovado'));
} else {
    console.log(chalk.bgRed.bold('Você está de Recuperação'));
}