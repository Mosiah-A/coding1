const livros = ["JS assertivo", "Engenharia de Testes", "Clean code", "Scrum", "Guia HTML5 e CSS3", "MongoDB"];

var tamanhoLivros = livros.length;

var corredorA1 = livros.slice(0, tamanhoLivros / 2);

var corredorA2 = livros.slice(tamanhoLivros / 2);
console.clear();
console.log(`Os livros do corredor A1 são:  ${corredorA1}`);
console.log(`Os livros do corredor A2 são: ${corredorA2}`);

const hqs = ["Turma da Monica", "One Puch Man", "One Piece", "Liga da Justiça"];
var juntarlivros = livros.concat(hqs);
juntarlivros = juntarlivros.sort()

tamanhoLivros =  juntarlivros.length;

livros1 = juntarlivros.slice(0, tamanhoLivros / 3);

livros2 = juntarlivros.slice(tamanhoLivros / 3, (tamanhoLivros / 3) * 2);

livros3 = juntarlivros.slice((tamanhoLivros / 3) * 2);

prateleira = ["A1", "A2", "A3"]

listaLocalELivros = [livros1, prateleira]

console.log(`Os livros do corredor A1 são:  ${livros1}`);
console.log(`Os livros do corredor A2 são: ${livros2}`);
console.log(`Os livros do corredor A3 são: ${livros3}`);

console.log(`O livro ${listaLocalELivros[0][0]}, está na prateleira: ${listaLocalELivros[1][0]}`)

