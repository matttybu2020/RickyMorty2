const { Router } = require("express");
const axios = require("axios");
const { Character, Episode } = require("../db");
const { Op } = require("sequelize");
const router = Router();
//! get Characters
//! buscamos los Personajes

//"https://rickandmortyapi.com/api/character"

router.get("/", (req, res, next) => {
  //https://rickandmortyapi.com/api/character/?name= +name
  let name = req.query.name; // lo traemos por params
  let characterPromiseApi;
  let characterPromiseDb;

  if (name) {
    characterPromiseApi = axios.get(
      "https://rickandmortyapi.com/api/character?name" + name
    ); // devuelve todo en .data
    characterPromiseDb = Character.findAll({
      include: Episode, // buscamos dentro de nuestra base de datos
      where: {
        name: {
          [Op.iLike]: "%" + name + "%", // encontramos por ejemplo rick
          //   ricky martin   "%" izquierda && patrick "%" va estar ala derecha
        },
      },
      order: [["name", "ASC"]],
    });
  } else {
    characterPromiseApi = axios.get(
      "https://rickandmortyapi.com/api/character"
    ); // devuelve todo en .data
    characterPromiseDb = Character.findAll({ include: Episode });
  }

  Promise.all([characterPromiseApi, characterPromiseDb])
    .then((respuesta) => {
      const [
        characterApi, // respuesta de la api
        characterDb, // respuesta de mi base de datos
      ] = respuesta; // personajes de la api && personajes de la db

      let filterCharacterApi = characterApi.data.results.map((character) => {
        return {
          // retorno los valores que no quiero enviar
          id: character.id,
          name: character.name,
          image: character.image,
          episodes: character.episode,
        };
      });
      //orde para ponerlos de menor a mayor para que sea mas preciso
      let allCharacters = [...filterCharacterApi, ...characterDb]; // concateno los valores de api && base de datos
      //console.log(characterApi.data); // tengo los personajes
      //console.log(characterDb);     // personajes de la bace de datos
      //console.log(allCharacters)
      //raw: true,
      // nest: true,
      res.send(allCharacters);
    })
    .catch((error) => next(error));
});

/*
router.get("/", (_req, res, next) => {
  //res.send('soy get /Characters')
  //queremos traernos los personajes
  return Character.findAll(
   { include: Episode}     // realizamos un join es decir vincular los personajes con los episodios
  )
    .then((characters) => {
      // esta promesa me va retornar mis personajes
      res.send(characters);
    })
    .catch((error) => {
      next(error);
    });
});*/

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    let character

    if (typeof id === 'string '&& id.length > 8) {
      //si el mio
      character = await Character.findByPk(id);
      res.send(character);
    } else {
      // si es de la db

      response = await axios.get("https://rickandmortyapi.com/api/character/" + id)
      character = response.data      
      
    }
    res.send(character);
  } catch (error) {
    next(error);
  }
});

//! post  Characters
//!creamos personajes

router.post("/", async (req, res, next) => {
  //res.send("soy post /Characters");
  try {
    const { name, image } = req.body;
    const newCharacter = await Character.create({ name, image });
    res.status(201).send(newCharacter);
  } catch (error) {
    next(error);
  }
});

//! post para vicular charactersId && episodeID

router.post("/:characterId/episodes/:episodeId", async (req, res, next) => {
  try {
    const { characterId, episodeId } = req.params;

    const character = await Character.findByPk(characterId); //busvco por primarykey
    await character.addEpisode(episodeId); //add + nombre de la tabla

    console.log(Character.findByPk instanceof Promise); // devuelve true o false
    res.status(200).send("Personaje viculado con exito");
  } catch (error) {
    next(error);
  }
});

//! put a  Characters

router.put("/", (req, res, next) => {
  res.send("soy put /Characters");
});

//! delete a  Characters

router.delete("/", (req, res, next) => {
  res.send("soy delete /Characters");
});

module.exports = router;
