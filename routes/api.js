const router = require('express').Router();

const apiUsuariosRouter = require('./api/usuarios');

router.use('/usuarios', apiUsuariosRouter);
//router.use('/producto', apiProductoRouter);

module.exports = router;