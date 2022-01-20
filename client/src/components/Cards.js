import React from "react";
import { Link } from "react-router-dom";
import "./styles/Cards.css"

const Cards = ({ name, hp, type, img,id }) => {

  return (
    <div className="card">
      <img
        // className="img"
        src={img}
        alt="imagen pokemon"
        height="150px"
        width="150px"
      />

      <div className="info">
      <h2>{name}</h2>
      <h3> Hp:{hp}</h3>

      <h4>Types: </h4>
      <div className="temp">
        {type?.map((t) => {
          return <p key={t.name}>{t.name}</p>;
        })}
      </div>
      <Link to={`/pokemonDetail/${id}`}>
        <button className="btn_card" >Ver mas</button>
      </Link>
      </div>
    </div>
  );
};

export default Cards;
