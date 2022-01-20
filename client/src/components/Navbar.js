import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPokemonByName } from "../redux/actions/actions";
import { SiPokemon } from "react-icons/si";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const pokeApi = useSelector(({ pokemonApi }) => pokemonApi);
  const pokeDb = useSelector(({ pokemonDb }) => pokemonDb);
  const pokeAll = pokeApi.concat(pokeDb);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getPokemonByName(search));
  };
  if (search) {
    setSearch("");
  }

  const reset = () => {
    dispatch(pokeAll());
  };

  return (
    <div className="navbar">
      <h1>
        {" "}
        <SiPokemon size="7rem" />
      </h1>
      <div className="links">
        <Link to="/home">
          <button onClick={() => reset()} className="button">
            Home
          </button>
        </Link>
        <Link className="landing_link" to="/Create">
          <button>Create Pokemon</button>
        </Link>
      </div>

      <form onSubmit={(e) => handleSearch(e)}>
        <input
          type="search"
          placeholder="Search pokemon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Navbar;
