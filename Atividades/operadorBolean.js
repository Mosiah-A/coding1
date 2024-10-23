/*
let idade = 22;
let entrada = 18;
// console.log(idade >= entrada);

let nome = "Mosiah";
let senha = 1234;
// console.log(nome !== senha);

let n1 = 2;
let n2 = 4;
// console.log(n1 === n2);

if (n1 == n2) {
  console.log("tipos de dados e valor identico");
} else {
  console.log("tipos de dados ou valor diferente");
}

if (n1 / 2) {
  console.log(`${n1} é par`);
} else {
  console.log(`${n1} é impar`);
}

if (n1 / 2 && n2 / 2) {
  console.log(`${n1} e ${n2} é par`);
}
if (n1 === n2) {
  console.log("é igual");
}

let senhaSecreta = "m0214h@22unc40@ndr4d3";
let senha = "m0214h@22unc40@ndr4d" + 3;

console.log(senha == senhaSecreta);
 
let resposta = prompt("Escolha: \n1. Para Abrir a porta \n2. Para Fechar a porta \n3. Para Porta entre aberta");

if (resposta == 1) {
  console.log("Lampada está Acesa");
} else if (resposta == 2 || resposta == 3) {
  console.log("Lampada está Apagada");
} else {
  console.log("Resposta Invalida");
}

*/

let nome = prompt("Nome: ");
let idade = prompt("idade: ");
let sexo = prompt("Sexo: ");
let prontuario = prompt("n° dp Prontuario: ");
let setor = prompt("Setor (1. Pediatria, 2. Cardiologista, 3. Clinico Geral): ");
let urgencia = prompt("Urgencia (1.Vermelho 2.Amarelo 3.Verde): ");


if( urgencia == 1){
  console.log("Sua consulta será marcada para Hoje");
} else if (urgencia == 2){
  console.log("Sua consulta será marcada para até 4 dias");
} else if (urgencia == 3){
  console.log("Sua consulta será marcada para uma semana");
} else {
  alert("Resposta Invalida");
}




