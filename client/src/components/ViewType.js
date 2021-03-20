import React from "react";
import "../styles/ViewType.css";

const ViewType = ({ type, search }) => {
  return (
    <ul className="type-list">
      {type.pokemons?.map((type, i) => (
        <li onClick={() => search(type.name)} key={i}>
          {type.name}
        </li>
      ))}
    </ul>
  );
};

export default ViewType;
