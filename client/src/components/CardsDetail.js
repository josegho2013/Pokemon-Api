import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonId } from "../redux/actions/actions";

const CardsDetail = (props) => {
  console.log(props, "ultimo");
  const dispatch = useDispatch();
  const pokemonDetail = useSelector(({ pokemonDetail }) => pokemonDetail);
  const params = useParams();
  // console.log(id, "ultimo");

  useEffect(() => {
    init();
    dispatch(getPokemonId());
  }, [dispatch]);

  const init = () => {
    if (params.id) {
      const dataById = pokemonDetail.filter((i) => {
        if (i.id === params.id) {
          return i;
        }
        return i;
      });
    }
  };

  if (!pokemonDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1> {props.edit}entro aqui</h1>
      {/* {pokemonDetail ? (
        <div>
          <img src={pokemonDetail.img} />
          <div >
            <h2>{pokemonDetail.name}</h2>
            <p>{pokemonDetail.hp}</p>
            <p>{pokemonDetail.attack}</p>
            <p>{pokemonDetail.attack}</p>

            <p>{pokemonDetail.defense}</p>

            <p>{pokemonDetail.speed}</p>
            <p>{pokemonDetail.height}</p>
            <p>{pokemonDetail.weight}</p>

            <h3>{pokemonDetail.rating}</h3>
          </div>
          {pokemonDetail.type.map((g) => {
            return <h3 key={g.id}>{g.name}</h3>;
          })}
        </div>
      ) : (
        <div >Loading...</div>
      )} */}
    </div>
  );
};

export default CardsDetail;
