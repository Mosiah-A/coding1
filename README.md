
<h1 align="center" > Resumo da aula </h1>

## Fase 1
- Criação de conta do GitHub
- Introdução ao Readme
- Criação do Readme profile
- Apresentação de templates

<img src="image.png" width=500px align="center">





## Fase 2 
- Apresentação dos tempos de GitHub
    - **Repositório** = Pasta mãe do projeto
    - **Branch =** Ramificações do projeto
    - **Pull Request =** enviar para aprovação
    - **Merge =** Mergia = unificar as branch
    - **Fork** = “Clona”   

- Apresentação do codespace no GitHub

# 11/09

## Javascript
<ul><strong>Var: </strong> Variavel altamente mutavel</ul>
<ul><strong>let: </strong> Variavel mediamente mutavel</ul>
<ul><strong>const: </strong> Variavel imutavel</ul>

- Contatena String
    - console.log("hello" + " " +"world")
    - nome = world
    - console.log('hello ${nome})
        - Output: hello world


# 25/09 
 - Biblioteca - lib
- dependências
- Frameworks

- Gerenciador: npm
    - npm init -y
- Servidos: Linguagem `Node.JS`
    - npm install node

codespade → github

fazer o comit e o pull

git add .

git commit -m “mensagem”

git init

git push origin main

## config no visual studio
``` git
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@example.com"

cd /caminho/para/seu/repositorio
git init

git remote add origin https://github.com/usuario/repositorio.git

git pull origin main


```

# 02/10

## Operadores de comparação

- == igual (considera quantidade de caracteres mas não o tipo de dado)

- === igual (tipo de dado, quantidade de caracteres / Mais preciso)

- .>  maior que

- <  menor que

- .>= maior igual a

- <= menos igual a

- !== diferente

- != diferente

- || ou

- && e

# 09/10
### Solicitar informação do usuario

prompt("Texto aqui");

### formatar string em lower case
prompt("Escolha a fruta: ").toLowerCase();

# 16/10
## Array

``` js
const livros = ["livro 1", "Livro 2", "Livro 3"]
```

[Atividade de Array](https://codepen.io/Mosiah-Andrade/pen/gOVWegd?editors=0012)



# 23/10 
## Array v2.0

``` js 
var tamanhoLivros = livros.length; /* O Length mostra o tamanho do do array livros */
livros.slice(indexInicial, [IndexFinal]); /* O slice divide a Array com o Index Inicial sendo obrigatorio
e o Index Final opcional mostrando onde deve parar */
array.concat(array); /* Concat concatena uma array em outra adicionando a array dentro do parentese no final da outra */
array.sort(); /* sort ordena de forma alfabetica ou numerica de A-z ou de 0-... */
```
[Atividade](https://codepen.io/Mosiah-Andrade/pen/rNXYBMG?editors=0012)
 
# 13/11
## Função
### Sintaxe
```js
Função {
bloco de codigo
}
```

### exempo:  

```jsx
function mediaMat(prova, redacao) {
	return (prova+redacao) / 2
}
console.log(mediaMat(10,5))

// --output-- 7 
```
