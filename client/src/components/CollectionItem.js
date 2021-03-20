import React from "react";

export default function CollectionItem({
  pokemonName,
  search,
  releasePokemon,
  getPokemon,
}) {
  return (
    <div onClick={() => search(pokemonName.name)}>
      {pokemonName.name}
      <img
        src={pokemonName.sprites?.front}
        onMouseOver={(e) => (e.currentTarget.src = pokemonName.sprites?.back)}
        onMouseOut={(e) => (e.currentTarget.src = pokemonName.sprites?.front)}
      />
      <button
        onClick={async () => {
          await releasePokemon(pokemonName);
          await getPokemon(pokemonName.name);
        }}
      >
        Release
      </button>
    </div>
  );
}
