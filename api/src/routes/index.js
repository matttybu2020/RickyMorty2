const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const charactersRoute = require('./characters')
const episodesRoute = require('./episodes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//! realizamos los middlewares


router.use('/characters',charactersRoute );
router.use('/episodes',episodesRoute);


module.exports = router;
