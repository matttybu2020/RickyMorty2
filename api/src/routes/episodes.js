const { Router } = require("express");
const router = Router();
const {Episode} = require('../db')
//! get Episodes

router.get("/", async (req, res, next) => {
  //res.send("soy get /Episodes");
try {
  const episode= await Episode.findAll()
res.send(episode)
  
} catch (error) {
  next(error)
}





});





//! post a Episodes
router.post("/", (req, res, next) => {
  //res.send("soy post /Episodes");
  const{name } = req.body
return Episode.create({name})
.then((newEpisode)=> { newEpisode
res.status(201).send(newEpisode)
})

.catch(error => next(error))

});





//! put a  Episodes

router.put("/", (req, res, next) => {
  res.send("soy put /Episodes");
});




//! delete a  Episodes

router.delete("/", (req, res, next) => {
  res.send("soy delete /Episodes");
});

module.exports = router;
