import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonId } from "../redux/actions/actions";

const CardsDetail = () => {
  const dispatch = useDispatch();
  const id = useParams();

  // const culo = useSelector(({ pokemonDetail }) => pokemonDetail);
  const pokemonDetail = useSelector(({ pokemonDetail }) => pokemonDetail);
  //const [pokemonDetail, setDetail] = useState({});
  //console.log("2.ultimo: ", pokemonDetail);

  const pokeApi = useSelector(({ pokemonApi }) => pokemonApi);
  const pokeDb = useSelector(({ pokemonDb }) => pokemonDb);
  const pokeAll = pokeApi.concat(pokeDb);


  useEffect(() => {
    dispatch(getPokemonId(id));
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
      <p>entro aqui </p>
      {pokemonDetail ? (
        <div>
          <img src={pokemonDetail.img} />
          <div>
            <h2>{pokemonDetail.name}</h2>
            <p>{pokemonDetail.hp}</p>
            <p>{pokemonDetail.attack}</p>

            <p>{pokemonDetail.defense}</p>

            <p>{pokemonDetail.speed}</p>
            <p>{pokemonDetail.height}</p>
            <p>{pokemonDetail.weight}</p>

            
          </div>
          {/* {pokemonDetail.type.map((g) => {
            return <h3 key={g.id}>{g.name}</h3>;
          })} */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default CardsDetail;
