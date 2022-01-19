import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ name, hp, type, img, id }) => {
  console.log("type: ", type);
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
          return <li key={t.name}>{t.name}</li>;
        })}
      </div>
      <Link to={`/pokemon/${id}`}>
        <button className="btn_card">Ver mas</button>
      </Link>
    </div>
  );
};

export default Cards;
