const axios = require('axios');
//Variable for A
let typeProblemA = 'water';
//Variables for B
let type1ProblemB = 'water';
let type2ProblemB = 'ice';
//Variable for C
let nameProblemC = 'clefairy';
//Variable for D
let numberProblemD = 2;
//Variable for E
let pokemonIdsProblemE = [1, 2, 35, 23];
let sortByNameTypeOrWeight = 'type';
//Variable for F
let numberProblemF = 2;
let typeProblemF = 'poison';

//Function A
const totalSumOfPokemonByType = async (pokemonType) => {
  return axios
    .get(`https://pokeapi.co/api/v2/type/${pokemonType}`)
    .then((res) => res.data.pokemon.length)
    .catch((err) => err.message);
};

//Function B
const pokemonWithTwoTypes = async (pokemonType1, pokemonType2) => {
  const arrayType1 = await axios
    .get(`https://pokeapi.co/api/v2/type/${pokemonType1}`)
    .then((res) =>
      res.data.pokemon.map((pokemonObject) => pokemonObject.pokemon)
    )
    .catch((err) => err.message);
  const arrayType2 = await axios
    .get(`https://pokeapi.co/api/v2/type/${pokemonType2}`)
    .then((res) =>
      res.data.pokemon.map((pokemonObject) => pokemonObject.pokemon)
    )
    .catch((err) => err.message);

  return arrayType1.filter((pokemon1) => {
    let flag = false;
    for (let i = 0; i < arrayType2.length; i++) {
      if (arrayType2[i].name === pokemon1.name) {
        flag = true;
        break;
      }
    }
    return flag;
  });
};

//Function C
const pokemonNumber = async (name) => {
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => res.data.id)
    .catch((err) => err.message);
};

//Function D
const pokemonStatesByNumber = async (number) => {
  const statObject = {};

  const statsArray = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${number}/`)
    .then((res) => res.data.stats)
    .catch((err) => err.message);

  statsArray.forEach(
    (stats) => (statObject[stats.stat.name] = stats.base_stat)
  );
  return statObject;
};

//Function E
const orderPokemon = async (idArray, order) => {
  const pokemonArray = await Promise.all(
    idArray.map(async (id) => {
      return await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
          return {
            name: res.data.name,
            weight: res.data.weight,
            type: res.data.types[0].type.name,
          };
        });
    })
  );
  return pokemonArray.sort((a, b) => {
    if (a[order] > b[order]) return 1;
    if (a[order] < b[order]) return -1;
    return 0;
  });
};

//Function F
const nameAndTypeMatch = async (id, typeQuery) => {
  const pokemonById = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => {
      if (res.data.types.some((types) => types.type.name === typeQuery)) {
        return true;
      } else {
        return false;
      }
    });
  return pokemonById;
};

const callToFunctions = async () => {
  const resultA = await totalSumOfPokemonByType(typeProblemA);
  const resultB = await pokemonWithTwoTypes(type1ProblemB, type2ProblemB);
  const resultC = await pokemonNumber(nameProblemC);
  const resultD = await pokemonStatesByNumber(numberProblemD);
  const resultE = await orderPokemon(
    pokemonIdsProblemE,
    sortByNameTypeOrWeight
  );
  const resultF = await nameAndTypeMatch(numberProblemF, typeProblemF);
  console.log(`\nCantidad de pokemon tipo ${typeProblemA}\n`, resultA);
  console.log(
    `\nPokemon de tipo ${type1ProblemB} y ${type2ProblemB}\n`,
    resultB
  );
  console.log(`\nNúmero del pokemon ${nameProblemC}\n`, resultC);
  console.log(`\nStats del pokemon número ${numberProblemD}\n`, resultD);
  console.log(
    `\nPokemon número ${pokemonIdsProblemE} ordenados por ${sortByNameTypeOrWeight}\n`,
    resultE
  );
  console.log(
    `\nEl pokemon número ${numberProblemF} es del tipo ${typeProblemF}?\n`,
    resultF
  );
};
callToFunctions();
