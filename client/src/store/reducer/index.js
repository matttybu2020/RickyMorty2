import { ASCENDENTE, DESCENDENTE } from "../../constantes/sort";
import { FETCH_CHARACTERS, SEARCH_CHARACTERS, SORT } from "../actions/index";

const initialState = {
  characters: [],
  filteredCharacters: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        filteredCharacters: action.payload
      };
    case SEARCH_CHARACTERS:
      return {
        ...state,
        filteredCharacters: action.payload
      };

    case SORT:
      let orderedCharacters = [...state.characters]; //realizamos una copia

      orderedCharacters = orderedCharacters.sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === ASCENDENTE ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload === DESCENDENTE ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredCharacters: orderedCharacters,
      };

    default:
      return state;
  }
}
export default rootReducer;
