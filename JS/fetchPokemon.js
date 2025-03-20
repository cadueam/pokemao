import { Pokemon } from './pokemonObj.js';

export const novoPokemon = await async function (idPokemon = null) {
  if (!idPokemon) {
    idPokemon = Math.floor(Math.random() * 649) + 1;
  }

  var urlEspecificoPokemon = `https://pokeapi.co/api/v2/pokemon-species/${idPokemon}/`; //API_ESPECIFICO
  var urlGeralPokemon = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`; //API_GERAL

  try {
    const response = await fetch(urlGeralPokemon);
    const data = await response.json();
    const responseSpecific = await fetch(urlEspecificoPokemon);
    const dataEspecific = await responseSpecific.json();

    const pokemonCapRate = dataEspecific.capture_rate;
    const description = dataEspecific.flavor_text_entries[0].flavor_text;
    const pokemonid = data.id;
    const pokemonName = data.name;

    const pokemonImage = function () {
      var isItShiny = Math.floor(Math.random() * 8192);
      if (isItShiny === 0) {
        return data.sprites.versions['generation-v']['black-white'].animated
          .front_shiny;
      } else {
        return data.sprites.versions['generation-v']['black-white'].animated
          .front_default;
      }
    };

    const pokemonInfos = new Pokemon(
      pokemonName,
      pokemonid,
      pokemonImage(),
      pokemonCapRate,
      description
    );
    console.log(pokemonInfos);
    return pokemonInfos;
  } catch (error) {
    console.error('Erro ao obter dados da área:', error);
    return null;
  }
};
