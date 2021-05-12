const router = require('express').Router();
const validations = require('../../validations/validations');
const mysqlConnection = require('../../config/configDb');
//const querys = require('../../sql/sqlUsuarios');


router.get('/', async (req, res) =>{

    mysqlConnection.query("SELECT idusuarios, email FROM `usuarios` WHERE estado <> 'eliminado'", (err, rows, fields) =>{
        if (!err) {
            res.json({estado:"OK",
            respuesta: rows,
            errores: "null"});
        } else {
            console.log(err);
        }
    });

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

        mysqlConnection.query("SELECT idusuarios, email FROM `usuarios` WHERE idusuarios = ? and estado <> 'eliminado'", [id], (err, rows, fields) =>{

            if (!err && rows.length !== 0) {
                res.json(rows[0]);
                
            } else {
                console.log(err);
                res.status(400).json({estado:"ERROR",
                respuesta: "null",
                errores: "Dato no encontrado"
            });
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

router.post('/', (req, res) =>{

    try {

        const aux = validations.validaEmail(req.body.email);

        if (!!aux) {
            return res.status(400).json({
                estado: "Error",
                respuesta: "null",
                error: aux,
            });
        } 

        const { email, contrasenia } = req.body;

        mysqlConnection.query("INSERT INTO `usuarios` (`email`,`contrasenia`,`f_creacion`) VALUES (?, ?, ?)", [ email, contrasenia, new Date() ], (err, rows, fields) =>{
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
        console.error('error catch: '+error);
        res.status(400).json({
            status: "error",
            message: error,
        });
    }

});


module.exports = router;