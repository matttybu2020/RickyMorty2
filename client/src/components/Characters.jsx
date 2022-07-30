import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../store/actions";

import Character from "./Character.jsx";

export default function Characters() {
  let characters = useSelector((state) => state.filteredCharacters);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);
  //console.log(dispatch);
  console.log(characters);

  return (
    <div>
      {characters.map((character) => {
        return (
          <Character
            id={character.id}
            name={character.name}
            image={character.image}
          />
        );
      })}
    </div>
  );
}
