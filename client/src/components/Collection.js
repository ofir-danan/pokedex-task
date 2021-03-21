import React from "react";
import { useState } from "react";
import CollectionItem from "./CollectionItem";

export default function Collection({
  collection,
  getCollection,
  search,
  releasePokemon,
}) {
  const [modalFlag, setModalFlag] = useState(false);

  // function changeModalDisplay() {
  //   modalFlag ? setModalFlag(false) : setModalFlag(true);
  // }
  return (
    <>
      <button
        className="get-collection-btn"
        onClick={() => {
          getCollection();
          setModalFlag(!modalFlag);
        }}
        id="myBtn"
        style={{ height: "20%" }}
      >
        Get collection
      </button>

      <div id="myModal" className={modalFlag ? "showModal" : "hideModal"}>
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              setModalFlag(false);
            }}
          >
            &times;
          </span>
          <h1>
            {collection.length > 0
              ? "Collection:"
              : "You need to Catch some pokemons!!! You are not good at all 👊"}
          </h1>
          {collection.map((itemCollection, i) => (
            <CollectionItem
              key={`collectionItem-${i}`}
              pokemonName={itemCollection}
              search={search}
              releasePokemon={releasePokemon}
            />
          ))}
        </div>
      </div>
    </>
  );
}
