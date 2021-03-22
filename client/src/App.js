import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import ViewPokemon from "./components/ViewPokemon";
import ViewType from "./components/ViewType";
import POKEDEX from "./styles/imgs/POKEDEX.png";

import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [pokemonData, setPokemon] = useState({});
  const [typeData, setType] = useState([]);
  const [collection, setCollection] = useState([]);
  const [catchFlag, setCatchFlag] = useState(false);

  function getCollection() {
    axios.get(`/api/collection`).then((res) => {
      setCollection(res.data);
    });
  }
  const onSearchChange = (e) => {
    setSearch(e.target.value);
    getCollection();
  };
  const getPokemon = async (pokemonName) => {
    try {
      setCatchFlag(true);
      const { data } = await axios.get(`/api/pokemon/${pokemonName}`);
      collection?.forEach((pokemonInfo) => {
        if (pokemonInfo.name === data.name) {
          data.isCaught = true;
          return;
        }
      });
      setPokemon(data);
    } catch (error) {
      console.log("Error: ", error.massage);
    }
  };

  const getType = async (typeName) => {
    try {
      const { data } = await axios.get(`/api/type/${typeName}`);
      setType(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const checkIfPokemonIsCaught = async (pokemon) => {
    try {
      let { data } = await axios.get(`/api/collection`);
      setCollection(data);
      collection.forEach((pokemonInfo, i) => {
        if (pokemonInfo.name === pokemon.name) {
          pokemon.isCaught = true;
        }
      });
      return pokemon.isCaught;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const catchPokemon = async (caughtPokemon) => {
    try {
      caughtPokemon.isCaught = true;
      let { data } = await axios.post(`/api/collection/catch`, caughtPokemon);
      console.log("pokemon was caught");
      setCollection(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const releasePokemon = async (pokemon) => {
    try {
      pokemon.isCaught = false;
      const { data } = await axios.delete(
        `/api/collection/release/${pokemon.name}`
      );
      console.log("pokemon was released");
      setCollection(data);
      setPokemon(pokemon);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div className="App">
      <img src={POKEDEX} className="logo" />
      <Search
        value={search}
        onChange={onSearchChange}
        search={getPokemon}
        releasePokemon={releasePokemon}
        collection={collection}
        getCollection={getCollection}
      />
      <div className="lists">
        <ViewPokemon
          data={pokemonData}
          canCatch={checkIfPokemonIsCaught}
          findType={getType}
          catchPokemon={catchPokemon}
          releasePokemon={releasePokemon}
          getCollection={getCollection}
          flag={catchFlag}
        />
        {typeData.pokemons?.length > 0 && (
          <ViewType type={typeData} search={getPokemon} />
        )}
      </div>
    </div>
  );
}

export default App;
