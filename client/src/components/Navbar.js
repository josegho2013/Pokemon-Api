import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../redux/actions/actions";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getPokemonByName(search));

    if (search) {
      setSearch("");
    }
  };

  return (
    <div>
      <div>
        <h2>Pokemon</h2>
        <Link to="/create">
          <button>Crear Pokemon</button>
        </Link>
      </div>

      <form onSubmit={(e) => handleSearch(e)}>
        <input
          type="search"
          placeholder="Search Pokemon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Navbar;
