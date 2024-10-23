let frutas = ["maçã", "pera", "banana", "melão", "melancia"]

console.log(frutas)
frutas.pop()
console.log(frutas)
console.log(`o total de frutas é ${frutas.length}`)


let quantidade = parseInt(prompt("Quantas frutas deseja adicionar?"));
i = 1

while (i <= quantidade){
  i++
  let add = prompt("adicione uma fruta: ")
  frutas.push(add)
}

console.log(frutas)

console.log(`o total de frutas é ${frutas.length}`)

