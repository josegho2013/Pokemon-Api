import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsApi, getPokemonsDb } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import "./styles/Landing.css";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsApi());
    dispatch(getPokemonsDb());
  }, [dispatch]);

  return (
    <div className="landing">
      
      <Link to="/home">
        <button className="button">Welcome</button>
      </Link>
    </div>
  );
};

export default Landing;
