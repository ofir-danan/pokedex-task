import React from "react";

export default function CollectionItem({
  pokemonName,
  search,
  releasePokemon,
}) {
  return (
    <div className="card-div">
      <div onClick={() => search(pokemonName.name)}>
        {pokemonName.name}
        <img
          src={pokemonName.sprites?.front}
          onMouseOver={(e) => (e.currentTarget.src = pokemonName.sprites?.back)}
          onMouseOut={(e) => (e.currentTarget.src = pokemonName.sprites?.front)}
        />
      </div>
      <button
        onClick={async () => {
          await releasePokemon(pokemonName);
        }}
      >
        Release
      </button>
    </div>
  );
}
