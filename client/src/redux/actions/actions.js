import axios from "axios";

export const POKE_API = "POKEAPI";
export const POKE_DB = "POKE_DB";
export const POKE_DETAIL = "POKE_DETAIL";
export const POKE_SEARCH = "POKE_SEARCH";
export const POKE_CREATE = "POKE_CREATE";
export const POKE_UPDATE = "POKE_UPDATE";
export const POKE_DELETE = "UPDATE_OPERATIONS";
export const POKE_TYPE = "POKE_TYPE";
export const FILTER_TYPE = "FILTER_TYPE";

export function getPokemonsApi() {
  return async (dispatch) => {
    const { data } = await axios.get(`/pokemon/api`);
    console.log(data, "dataaaa");
    dispatch({ type: POKE_API, payload: data });
  };
}
export function getPokemonsDb() {
  return async (dispatch) => {
    const { data } = await axios.get(`/pokemon/db`);
    dispatch({ type: POKE_DB, payload: data });
  };
}

export function getPokemonId(id) {
  console.log(id,"ID_ACTIONS")
  return async (dispatch) => {
    const { data } = await axios.get(`/pokemon/pokemonDetail/${id}`);
    console.log("id action: ", data);
    dispatch({ type: POKE_DETAIL, payload: data });
  };
}

export function getPokemonByName(payload) {
  return async (dispatch) => {
    const { data } = await axios.get(`/pokemon/search/${payload}`);
    console.log("1.search", data)
    dispatch({ type: POKE_SEARCH, payload: data });
  };
}

export function createPokemon(payload) {
  return async (dispatch) => {
    const { data } = await axios.post(`/pokemon/create`, payload);
    dispatch({ type: POKE_CREATE, payload: data });
  };
}

export function updatePokemon(id) {
  return async (dispatch) => {
    const { data } = await axios.put(`/pokemon/update/${id}`);
    dispatch({ type: POKE_UPDATE, payload: data });
  };
}

export function deletePokemon(id) {
  return async (dispatch) => {
    const { data } = await axios.delete(`/pokemon/delete/${id}`);
    dispatch({ type: POKE_DELETE, payload: data });
  };
}

export const getTypes = () => {
  console.log("1.datatype");
  return async (dispatch) => {
    const { data } = await axios.get(`/type`);
    console.log(data, "datatype");
    dispatch({ type: POKE_TYPE, payload: data });
  };
};

export const filterByType = (payload) => {
  return (dispatch) => {
    dispatch({ type: FILTER_TYPE, payload: payload });
  };
};
