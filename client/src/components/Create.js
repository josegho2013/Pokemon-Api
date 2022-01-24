import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createPokemon } from "../redux/actions/actions";

const Create = () => {
  const dispatch = useDispatch();
  const pokeType = useSelector(({ pokeType }) => pokeType);

  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  function handleSubmit(e) {
    const newPokemon = {
      name: input.name,
      hp: input.hp,
      attack: input.attack,
      defense: input.defense,
      speed: input.speed,
      height: input.height,
      weight: input.weight,
      types: input.types,
    };

    e.preventDefault();

    dispatch(createPokemon(newPokemon));

    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
  }
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <h2>Create your New Pokemon</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Insert Name"
            value={input.name}
            onChange={(e) => handleChange(e)}
            pattern="[a-zA-Z ]{3,15}"
            required
          />
        </div>
        <div>
          <label>Hp: </label>
          <input
            className="sub-input name"
            type="number"
            name="hp"
            placeholder="Insert Hp"
            value={input.hp}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label>Attack: </label>
          <input
            type="number"
            name="attack"
            placeholder="Insert Attack"
            value={input.attack}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label>Defense: </label>
          <input
            type="number"
            name="defense"
            placeholder="Insert Defense"
            value={input.defense}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label>Speed: </label>
          <input
            type="number"
            name="speed"
            placeholder="Insert Name"
            value={input.speed}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label>Height: </label>
          <input
            type="text"
            name="height"
            placeholder="Insert Height"
            value={input.height}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label>Weight: </label>
          <input
            type="text"
            name="weight"
            placeholder="Insert Weight"
            value={input.weight}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label>Type: </label>
          <input
            type="text"
            name="types"
            placeholder="Insert types"
            value={input.types}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
