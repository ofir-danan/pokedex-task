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
      {/* <h1> Collection:</h1>
      {collection.map((itemCollection, i) => (
        <CollectionItem
        key={`collectionItem-${i}`}
        pokemonName={itemCollection}
        search={search}
        />
        ))}
        <button className="get-collection-btn" onClick={getCollection}>
        Get collection
      </button> */}
      {/* */}

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
              getPokemon={getPokemon}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// // Get the modal
// let modal = document.getElementById("myModal");

// // Get the button that opens the modal
// let btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
