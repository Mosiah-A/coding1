# Métodos de Array no JavaScript

## Dicionário com alguns dos métodos de array

<details> <summary>IndexOf( )</summary>

  > O método `indexOf` em JavaScript é usado para encontrar a posição (índice) de um elemento específico em um array ou uma substring em uma string. Se o elemento for encontrado, o método retorna o índice da primeira ocorrência; caso contrário, retorna `-1`.
  
  ```js
  const texto = "Olá, mundo!";
  const indice = texto.indexOf("mundo"); // retorna 5
  ```
</details>
<details> <summary> Join( ) </summary>
  
  > O método `join` em JavaScript é usado para unir todos os elementos de um array em uma única string. Você pode especificar um separador para os elementos (por padrão, ele usa uma vírgula).

### Sintaxe
```js
array.join(separator)
```
### Exemplo
```js
const frutas = ["maçã", "banana", "cereja"];
const resultado = frutas.join(", ");
console.log(resultado); // "maçã, banana, cereja"

```

</details>


<details> <summary> map( ) </summary>
  
  > O método `map()` em JavaScript é utilizado para criar um novo array com os resultados da chamada de uma função fornecida em cada elemento do array original. É excelente para transformar dados de maneira funcional e eficiente

### Sintaxe
```js
array.map(callback(element, index, array), 
```
### Exemplo
```js
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map((num, index) => {
  console.log(`Índice: ${index}, Valor: ${num}`);
  return num * 2;
});

console.log(dobrados); // [2, 4, 6, 8]


```

</details>



<details> <summary> filter( ) </summary>
  

### Sintaxe
```js
array.filter(callback(element, index, array), thisArg)

```

- `callback:` Função a ser executada em cada elemento do array. Recebe três argumentos:

  - `element:` O elemento atual sendo processado no array.

  - `index (opcional):` O índice do elemento atual sendo processado no array.

  - `array (opcional):` O array original sobre o qual `filter` foi chamado.

  - `thisArg (opcional):` Valor a ser usado como `this` quando a função de callback é executada.

### Exemplo
```js
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter((num, index) => {
  console.log(`Índice: ${index}, Valor: ${num}`);
  return num % 2 === 0;
});

console.log(pares); // [2, 4, 6]

```

</details>





<details> <summary> finde( ) </summary>
  > O método `find()` em JavaScript é utilizado para retornar o primeiro elemento em um array que satisfaça uma função de teste fornecida. Se nenhum valor satisfizer a função de teste, ele retorna `undefined`.

### Sintaxe
```js
array.find(callback(element, index, array), thisArg)

```

- `callback:` Função a ser executada em cada elemento do array. Recebe três argumentos:

  - `element:` O elemento atual sendo processado no array.

  - `index (opcional):` O índice do elemento atual sendo processado no array.

  - `array (opcional):` O array original sobre o qual `find` foi chamado.

  - `thisArg (opcional):` Valor a ser usado como `this` quando a função de callback é executada.

### Exemplo
```js
const numeros = [1, 2, 3, 4, 5];
const encontrado = numeros.find(num => num > 2);
console.log(encontrado); // 3
```

</details>
