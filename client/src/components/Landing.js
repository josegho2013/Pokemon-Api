import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsApi } from "../redux/actions/actions";
import { Link } from "react-router-dom";

const Landing = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPokemonsApi());
    }, [dispatch]);


    return (
        <div>
             <Link to="/home">
        <button className="button">Welcome</button>
      </Link>
        </div>
    )
}

export default Landing
