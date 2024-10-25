//
/*
    Atividade: programa de fixação tipos primitivos
        Objetivos: Desenvolver  habilidade de compreensãp de variáveis, strings, numeros e calculos básicos usando JavaScript
*/

 
console.log("\n##################### Hello ##################\n")

const nome = 'Mosiah';
const idade = 22;

console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);

console.log("\n##################### Cidade ##################\n")
const cidade = "Pulista";

console.log(`${nome} é de ${cidade}.`);


console.log("\n##################### Calculadora ##################\n")

const num1 = 18;
const num2 = 2;

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} x ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);



console.log("\n##################### Area triangulo ##################\n")

const base = 4;
const altura = 12;

const area = (base * altura) / 2;
console.log(`A área do triângulo é ${area}`);





console.log("\n##################### Media ##################\n")

const nota1 = 5;
const nota2 = 8;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;
console.log(`O resultado da média é ${media}`);



console.log("\n##################### Desconto ##################\n")


const pOriginal = 15.20;
const desconto = 50;
const pFinal = (pOriginal * desconto) / 100
console.log(`R$:${pOriginal.toFixed(2)} - ${desconto}% = R$:${pFinal.toFixed(2)}`)


console.log("\n##################### IRF ##################\n")


var salario = 15020.20;

let aliquota, deducao;

if (salario <= 2259.20) {
    aliquota = 0;
    deducao = 0;
} else if (salario <= 2826.65) {
    aliquota = 0.075;
    deducao = 169.44;
} else if (salario <= 3751.05) {
    aliquota = 0.15;
    deducao = 381.44;
} else if (salario <= 4664.68) {
    aliquota = 0.225;
    deducao = 662.77;
} else {
    aliquota = 0.275;
    deducao = 896;
}

let imposto = (salario * aliquota) - deducao;

console.log(`Salario= R$ ${salario.toFixed(2)} Imposto ${imposto.toFixed(2)}`)


console.log("\n##################### Conversor de moeda ##################\n")

var taxa = 5;
var valor = 20;
valorFinal = valor / taxa

console.log(`taxa: ${taxa*100} \nValor Inicial: ${valor} \nValor Final: ${valorFinal}`)


console.log("\n##################### Celsius para Fahrenheit ##################\n")

var c = 20
var f = (c*(9/5) + 32)
console.log(`Celsius: ${c}\nFahrenheit: ${f}`)


console.log("\n##################### IMC ##################\n")
var peso = 68;
var alturaPessoa = 1.78;

imc = peso / (alturaPessoa * alturaPessoa)

console.log(`IMC: ${imc.toFixed(2)}`)
