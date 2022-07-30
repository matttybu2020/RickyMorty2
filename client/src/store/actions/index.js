import axios from "axios";
export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const SEARCH_CHARACTERS = "SEARCH_CHARACTERS";
export const SORT = "SORT";

export function fetchCharacters() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/api/characters/")
      .then((characters) => {
        dispatch({
          //despachamos la action
          type: FETCH_CHARACTERS,
          payload: characters.data,
        });
        //console.log(characters.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
/*
export function searchCharacters(search) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/api/characters?name=" + search
      );
//console.log(json.data.name)
      return dispatch({
        type: SEARCH_CHARACTERS,
        payload: json.data,
      }); //despachamos la action
    } catch {
      return alert("No se pudo encontrar el nombre");
    }
  };
}*/

export function sort(order) {
  return {
    type: SORT,
    payload: order,
  };
}


export function searchCharacters(search) {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/api/characters?name=" + search)
      .then((characters) => {
        dispatch({
          //despachamos la action
          type: SEARCH_CHARACTERS,
          payload: characters.data,
        });
       console.log(characters.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

