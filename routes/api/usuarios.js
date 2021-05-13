const router = require('express').Router();
const validations = require('../../validations/validations');
const mysqlConnection = require('../../config/configDb');
const bcryptjs = require('bcryptjs');
const querySql = require('../../sql/sqlUsuarios');

router.get('/', async (req, res) =>{

    try {
        mysqlConnection.query(querySql.GET_ALL_USERS.query, (err, result, fields) =>{
            if (!err) {
                res.json({estado:"OK",
                respuesta: result,
                errores: "null"});
            } else {
                console.log(err);
            }
        });
    } catch (error) {
        console.error('error catch: '+ error);
        res.status(400).json({
            status: "error",
            message: error,
        });
        
    }

});

router.get('/:id', async (req, res) =>{
    
    try {
        const { id } = req.params;

        const aux = validations.validaInteger(id);

        if (!!aux) {
            return res.status(400).json({
                estado: "Error",
                respuesta: "null",
                error: aux,
            });
        } 

        mysqlConnection.query(querySql.GET_USER.query, [id,], (err, result, fields) =>{
            if (!err && result.length !== 0) {
                res.json(result[0]);
                
            } else {
                console.log(err);
                res.status(400).json({estado:"ERROR",
                respuesta: "null",
                errores: "Dato no encontrado"});
            }
        });

    } catch (error) {
        console.error('error catch: '+error);
        res.status(400).json({
            status: "error",
            message: error,
        });
    }
    
});

router.post('/', async (req, res) =>{

    try {

        const aux = validations.validaEmail(req.body.email);
        const aux2 = validations.validaAlphanumeric(req.body.contrasenia);

        if (!!aux) {
            return res.status(400).json({
                estado: "Error",
                respuesta: "null",
                error: aux,
            });
        } 

        if (!!aux2) {
            return res.status(400).json({
                estado: "Error",
                respuesta: "null",
                error: aux2,
            });
        } 

        const { email, contrasenia } = req.body;

        const passHash = await bcryptjs.hash(contrasenia,12);

        mysqlConnection.query(querySql.POST_REG_USER.query, [ email, passHash, new Date() ], (err, result, fields) =>{
            if (!err) {
                res.json({estado:"OK",
                respuesta: "Registrado Correctamente",
                errores: "null"});
            } else {
                console.log(err);
                res.json({estado: "ERROR"});
            }
        });

    } catch (error) {
        console.error('error catch: '+ error);
        res.status(400).json({
            status: "error",
            message: error,
        });
    }

});

router.post('/login', async (req, res) =>{

    try {

        const aux = validations.validaEmail(req.body.email);
        const aux2 = validations.validaAlphanumeric(req.body.contrasenia);

        if (!!aux) {
            return res.status(400).json({
                estado: "Error",
                respuesta: "null",
                error: aux,
            });
        } 

        if (!!aux2) {
            return res.status(400).json({
                estado: "Error",
                respuesta: "null",
                error: aux2,
            });
        } 

        const { email, contrasenia } = req.body;

        mysqlConnection.query(querySql.POST_VALID_PASS.query, [email], (err, result, fields) =>{
            if (!err) {
                const compare = bcryptjs.compareSync(contrasenia, result[0].contrasenia);
                if (compare){
                    res.json({estado:"OK",
                    respuesta: "Password Correcta",
                    errores: "null"});
                }else{
                    res.json({estado:"ERROR",
                    respuesta: "null",
                    errores: "Password IN-Correcta"});
                }               
            } else {
                console.error(err);
                res.json({estado: "ERROR"});
            }
        });

    } catch (error) {
        console.error('error catch: '+ error);
        res.status(400).json({
            status: "error",
            message: error,
        });
    }

});

module.exports = router;