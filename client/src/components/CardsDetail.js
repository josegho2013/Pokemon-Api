import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonId } from "../redux/actions/actions";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CardsDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const pokemonDetail = useSelector(({ pokemonDetail }) => pokemonDetail);

  const pokeApi = useSelector(({ pokemonApi }) => pokemonApi);
  const pokeDb = useSelector(({ pokemonDb }) => pokemonDb);
  const pokeAll = pokeApi.concat(pokeDb);

  useEffect(() => {
    dispatch(getPokemonId(params.id));
    //init();
  }, [dispatch]);

  // const init = () => {
  //   if (culo) {
  //     setDetail(culo);
  //   }
  // setDetail(useSelector(({ pokemonDetail }) => pokemonDetail));

  // if (params.id) {
  //   const dataById = pokemonDetail.filter((i) => {
  //     if (i.id === params.id) {
  //       return i;
  //     }
  //     return i;
  //   });
  //   console.log("2.ultimo: ", pokemonDetail);
  // }

  // if (!pokemonDetail) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <Navbar />

      {pokemonDetail ? (
        <div>
          <h2>{pokemonDetail.name}</h2>
          <img src={pokemonDetail.sprite} />
          <p>Hp:{pokemonDetail.hp}</p>
          <p>Attack:{pokemonDetail.attack}</p>
          <p>Defense:{pokemonDetail.defense}</p>
          <p>Speed:{pokemonDetail.speed}</p>
          <div>
            {pokemonDetail.types?.map((t) => {
              return <p key={t.name}>{t.name}</p>;
            })}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <Footer />
    </div>
  );
};
export default CardsDetail;
