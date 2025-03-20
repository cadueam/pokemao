import { novoPokemon } from './fetchPokemon.js';

const pokeBox = document.getElementById('show-poke');
const showPokeButton = document.getElementById('showpoke');

const showpoke = async function () {
  const pokemonInfos = await novoPokemon();
  pokeBox.innerHTML = `<div id="id-name">
<p id="poke-name">${pokemonInfos.nomepokemon}</p>
<p id="poke-id">${pokemonInfos.idpokemon}</p>
</div>

<img
src="${pokemonInfos.spritepokemon}"
alt="${pokemonInfos.nomepokemon}"
id="pokemon-img"
/>
<p id="poke-info">
${pokemonInfos.description}
</p>`;
};

showPokeButton.addEventListener('click', showpoke);
