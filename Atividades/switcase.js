
let nome = prompt("Digite seu nome: ")
let pesquisa = prompt("Escolha a fruta: ").toLowerCase();

switch (pesquisa) {
  case "limão":
  case "laranja":
    console.log(`${nome}, O ${pesquisa} custa R$2,00`)
    break;
  case "morango":
    console.log(`${nome}, O morango custa R$5,00`)
    break;
  default:
    console.log(`${nome}, Opção Invalida`)
}