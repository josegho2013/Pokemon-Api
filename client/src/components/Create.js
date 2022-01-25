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
    image: "",
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
      image: input.image,
      types: input.types,
    };

    e.preventDefault();
    console.log("newPokemon", newPokemon);
    dispatch(createPokemon(newPokemon));

    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      image: "",
      types: [],
    });
  }
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function handleSelect(e) {
    setInput({
      ...input,
      types: [...input.types, e.target.value],
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
          <label>Image: </label>
          <input
            type="url"
            name="image"
            placeholder="Insert image"
            value={input.image}
            onChange={(e) => handleChange(e)}
            // required
          />
        </div>
        <div>
          <label>Type: </label>
          <select onChange={(e) => handleSelect(e)}>
            {pokeType.map((t) => {
              return <option key={t.id}>{t.name}</option>;
            })}
          </select>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
