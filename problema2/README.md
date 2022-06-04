# Proyecto Número 2

Consta de 6 funciones que te permitirán obtener información de la PokeAPI

## Cómo ejecutar el programa

Instalar las dependencias

```bash
  npm install
```

Primera función: devuelve la suma total de pokemones por tipo.
Para ello en la línea 3 debes cambiar el valor de la variable por el que desees.

```bash
  let typeProblemA = 'water';
```

Segunda función: retorna todos los pokemones que cumplen con 2 tipos.
Debes asignar a las variables de las líneas 5 y 6 un string con los tipos que desees buscar.

```bash
  let type1ProblemB = 'water';
  let type2ProblemB = 'ice';
```

Tercera función: dado el nombre de un pokémon retorna el número del mismo.
Cambia el valor de la variable de la línea 8 por el nombre que desees buscar.

```bash
  let nameProblemC = 'clefairy';
```

Cuarta función: dado el número de un pokémon retorna un objeto con sus 6 stats base.
Cambia el valor de la variable de la línea 10 por el número que desees buscar.

```bash
  let numberProblemD = 2;
```

Quinta función: retorna los pokemon en un arreglo con su nombre, tipo y peso ordenados según se indique por una de estas 3 características.
Colocar en la variable de la línea 12 un arreglo con los Ids de los pokemon y en la línea 13 un string con la característica por la cual deseas ordenarlos (type, weight o name).

```bash
  let pokemonIdsProblemE = [1, 2, 35, 23];
  let sortByNameTypeOrWeight = 'type';
```

Sexta función: retorna un true o false si el pokemon elegido es de determinado tipo.
Colocar en la línea 15 un número y en la línea 16 un string con el tipo.

```bash
  let numberProblemF = 2;
  let typeProblemF = 'poison';
```

Iniciar la prueba para ver en consola el resultado.
Asegúrate de tener todas las variables con valor antes de iniciar.

```bash
  node index.js
```
