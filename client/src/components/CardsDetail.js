import {React, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getPokemonId } from "../redux/actions/actions";

const CardDetail = ({id}) => {
    const dispatch = useDispatch();
    const pokemonDetail= useSelector(({ pokemonDetail }) => pokemonDetail);

    useEffect(() => {
        dispatch(getPokemonId(id));
      }, []);


    if (!pokemonDetail) {
  
        return <div >Loading...</div>;
      }

    return (
        <div>
            {pokemonDetail ? (
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
      )}
        </div>
    )
}

export default CardDetail
