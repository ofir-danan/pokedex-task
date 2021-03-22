import React, { useState } from "react";

const typeColors = {
  bug: "#729f3f",
  dragon: "#f16e57",
  fairy: "#fdb9e9",
  fire: "#fd7d24",
  ghost: "#7b62a3",
  ground: "#ab9842 ",
  normal: "#a4acaf",
  psychic: "#f366b9",
  steel: "#9eb7b8",
  dark: "#707070",
  electric: "#eed535",
  fighting: "#d56723",
  flying: "#3dc7ef ",
  grass: "#9bcc50",
  ice: "#51c4e7",
  poison: "#b97fc9",
  rock: "#a38c21",
  water: "#4592c4",
};

const ViewPokemon = ({
  data,
  findType,
  catchPokemon,
  releasePokemon,
  canCatch,
  flag,
}) => {
  let types = data.types?.map((type) => type);
  function handleClick(data) {
    return data.isCaught ? `Release` : `Catch`;
  }

  return (
    <div
      onLoadedData={handleClick}
      className={flag ? "showButton card-div" : "hideButton"}
    >
      <div>
        <h1>{data.name}</h1>
        <img
          src={data.sprites?.front}
          onMouseOver={(e) => (e.currentTarget.src = data.sprites?.back)}
          onMouseOut={(e) => (e.currentTarget.src = data.sprites?.front)}
          className="main-img"
        />
        <p className="name" key={data.name}>
          Name: {data.name}
        </p>
        <p className="height" key={data.height}>
          Height: {data.height}
        </p>
        <p className="weight" key={data.weight}>
          Weight: {data.weight}
        </p>
        <p className="type" key="types">
          Type:{" "}
          <div>
            {types?.map((type, i) => (
              <span
                className="type-btn"
                key={i}
                style={{
                  backgroundColor: typeColors[type.name],
                  borderRadius: 3,
                  cursor: "pointer",
                  margin: 4,
                }}
                onClick={() => findType(type.name)}
              >
                {type.name}
              </span>
            ))}
          </div>
        </p>
      </div>
      <button
        onClick={async () => {
          (await canCatch(data))
            ? await releasePokemon(data)
            : await catchPokemon(data);
        }}
      >
        {handleClick(data)}
      </button>
    </div>
  );
};

export default ViewPokemon;
