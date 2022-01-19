import React from "react";
import { useSelector } from "react-redux";
import Cards from "./Cards";

const Home = () => {
  const pokeApi = useSelector(({ pokemonApi }) => pokemonApi);
  const pokeDb = useSelector(({ pokemonDb }) => pokemonDb);

  const pokeAll = pokeApi.concat(pokeDb);

  console.log(pokeAll, "pokeAll");

 

  return (
    <div>
      {pokeAll ? (
        pokeAll.map((po) => {
            console.log("po.types: ", po.types)
          return (
            <Cards
              key={po.id}
              img={po.img}
              name={po.name}
              hp={po.hp}
              type={po.types}
            />
          );
        })
      ) : (
        <div>Loading...</div>
      )}

      <h1>Por fin Apareci</h1>
    </div>
  );
};

export default Home;
