import React from "react";
import Collection from "./Collection";

const Search = ({
  value,
  onChange,
  search,
  releasePokemon,
  collection,
  getCollection,
}) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button className="search-btn" onClick={() => search(value)}>
        Find Your Pokemon!
      </button>
      <Collection
        releasePokemon={releasePokemon}
        collection={collection}
        search={search}
        getCollection={getCollection}
      />
    </div>
  );
};

export default Search;
