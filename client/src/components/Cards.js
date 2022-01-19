import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ name, hp, type, img, id }) => {
  console.log(id,"IDDD")
  return (
    <div>
      <img
        className="img"
        src={img}
        alt="imagen pokemon"
        height="135px"
        width="135px"
      />
      <h2>{name}</h2>
      <h3> Hp:{hp}</h3>

      <h4>Types: </h4>
      <div>
        {type?.map((t) => {
          return <p key={t.name}>{t.name}</p>;
        })}
      </div>
      <Link to={`/pokemonDetail/${id}`}>
        <button >Ver mas</button>
      </Link>
    </div>
  );
};

export default Cards;
