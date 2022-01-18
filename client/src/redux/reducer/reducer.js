import {
  POKE_API,
  POKE_DB,
  POKE_DETAIL,
  POKE_SEARCH,
  POKE_CREATE,
  POKE_UPDATE,
  POKE_DELETE,
  POKE_TYPE,
  FILTER_BY_TYPE,
} from "../actions/actions";

const initialState = {
  pokemonApi: [],
  pokemonDb: [],
  pokemonDetail: [],
  requestPoke: [],
  pokeType: [],
  createPoke: [],
  updatePoke: [],
  deletePoke: [],
};

function RootReducer(state = initialState, action) {
  switch (action.type) {
    case POKE_API:
      return {
        ...state,
        pokemonsApi: action.payload,
        requestPoke: action.payload,
      };
    case POKE_DB:
      return {
        ...state,
        pokemonsDb: action.payload,
      };

    case POKE_DETAIL:
      return {
        ...state,
        pokemonsDetail: action.payload,
      };
    case POKE_SEARCH:
      return {
        ...state,
        requestPoke: action.payload,
      };

    case POKE_TYPE:
      return {
        ...state,
        pokeType: action.payload,
      };
    case FILTER_BY_TYPE:
      if (action.payload === "All") {
        return {
          ...state,
          pokeType: state.pokemonApi,
        };
      } else {
        return {
          ...state,
          pokeType: state.pokemonApi.filter((po) => {
            let prueba = po.type.some((a) => {
              return a.name === action.payload;
            });
            return prueba;
          }),
        };
      }
    case POKE_CREATE:
      return {
        ...state,
        createPoke: action.payload,
      };
    case POKE_UPDATE:
      return {
        ...state,
        updatePoke: action.payload,
      };
    case POKE_DELETE:
      return {
        ...state,
        deletePoke: action.payload,
      };

    default:
      return state;
  }
}

export default RootReducer;
