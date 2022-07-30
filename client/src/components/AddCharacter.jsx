import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function AddCharacter() {
  const [character, SetCharacter] = useState({});
  let history = useHistory();

  function onInputChange(e) {
    console.log(character);
    e.preventDefault();
    SetCharacter({
      ...character,
      [e.target.name]: e.target.value,
    });
  }
  function onSubmit(e) {
    axios
      .post("http://localhost:3001/api/characters/", { character })
      .then(() => {
        history.push("/");
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="">Nombre </label>
      <input
        onChange={onInputChange}
        name="name"
        type="text"
        value={character.name}
      />

      <label htmlFor="">Imagen </label>
      <input
        onChange={onInputChange}
        name="imagen"
        type="text"
        value={character.image}
      />

      <input type="submit" />
    </form>
  );
}
