import React from "react";
import { useState } from "react";
import "../styles/Collection.css";
import CollectionItem from "./CollectionItem";

export default function Collection({
  collection,
  getCollection,
  search,
  releasePokemon,
  getPokemon,
}) {
  const [modalFlag, setModalFlag] = useState(false);

  function changeModalDisplay() {
    modalFlag ? setModalFlag(false) : setModalFlag(true);
  }
  return (
    <>
      <button
        className="get-collection-btn"
        onClick={
          (getCollection,
          () => {
            changeModalDisplay();
          })
        }
        id="myBtn"
      >
        Get collection
      </button>

      <div id="myModal" className={modalFlag ? "showModal" : "hideModal"}>
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              changeModalDisplay();
            }}
          >
            &times;
          </span>
          <h1> Collection:</h1>
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
