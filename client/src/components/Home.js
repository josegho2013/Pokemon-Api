import React from "react";
import { useSelector } from "react-redux";
import  Footer from"./Footer"
import Cards from "./Cards";
import Navbar from "./Navbar";
import "./styles/Home.css";

const Home = () => {
  const pokeApi = useSelector(({ pokemonApi }) => pokemonApi);
  const pokeDb = useSelector(({ pokemonDb }) => pokemonDb);
  const pokeAll = pokeApi.concat(pokeDb);

  console.log(pokeAll, "pokeAll");

  return (
    <div className="home">
      <Navbar/>
      {pokeAll ? (
        pokeAll.map((po) => {
          return (
            <Cards
              id={po.id}
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

      <Footer/>
    </div>
  );
};

export default Home;
