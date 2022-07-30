import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function CharactersDetail() {
  const [character, SetCharacter] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3001/api/characters/" + id).then((response) => {
      SetCharacter(response.data);
    });
    return () => {
      SetCharacter(null);
    };
  }, []);

  return (
    <>
      <div>
        {character ? (
          <>
            <h3>{character.name}</h3>

            <img src={character.image} alt="imagen" />
          </>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </>
  );
}
