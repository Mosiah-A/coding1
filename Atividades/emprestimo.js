const score = prompt("Score: ")
const valor = prompt("Valor do Emprestimo: ")

const resultado = (score >= 90 && valor < 2000) ? `Emprestimo Aprovado!\n Valor do Emprestimo ${valor}\n Valor com Juros ${valor*2}` : 'Score Muito baixo, Status: Reprovado'

console.log(resultado);