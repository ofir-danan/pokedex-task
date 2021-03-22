import React from "react";
import pokemonPhotos from "../styles/pokemonPhotos";

const ViewType = ({ type, search }) => {
  return (
    <div className="type-list showButton">
      {type.pokemons?.map((type, i) => (
        <div
          onClick={() => search(type.name)}
          key={i}
          className="type-item card-div"
        >
          <img
            src={pokemonPhotos.find((item) => item.name === type.name).image}
            alt={`${type.name} image`}
          />
          <div className="type-item-text">
            <h3>{type.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewType;
