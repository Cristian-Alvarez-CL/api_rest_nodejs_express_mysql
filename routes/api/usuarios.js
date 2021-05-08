const router = require('express').Router();
const validations = require('../../validations/validations');

const  mysqlConnection = require('../../config/configDb');

router.get('/', async (req, res) =>{

    mysqlConnection.query("SELECT email, contrasenia FROM `usuarios` WHERE estado <> 'eliminado'", (err, rows, fields) =>{
        if (!err) {
            res.json({estado:"OK",
            respuesta: rows,
            errores: "null"
        });
            
        } else {
            console.log(err);
        }
    });
});

router.get('/:id', async (req, res) =>{
// revisar pasar string a number para validar correctamente lo que viene de un param
    console.log(req.params);

    validations.validaInteger(req.params);

    const { id } = req.params;

    mysqlConnection.query("SELECT email, contrasenia FROM `usuarios` WHERE idusuarios = ? and estado <> 'eliminado'", [id], (err, rows, fields) =>{

        if (!err && rows.length !== 0) {
            res.json(rows[0]);
            
        } else {
            console.log(err);
            res.json({estado:"OK",
            respuesta: "null",
            errores: "Dato no encontrado"
        });
        }
    });
});

router.post('/', (req, res) =>{

    validations.validaString(req.body.email);
    validations.validaInteger(req.body.contrasenia);

    const { email, contrasenia } = req.body;

    mysqlConnection.query("INSERT INTO `usuarios` (`email`,`contrasenia`,`f_creacion`) VALUES (?, ?, ?)", [ email, contrasenia, new Date() ], (err, rows, fields) =>{
        if (!err) {
            res.json({estado:"OK",
            respuesta: "Registrado Correctamente",
            errores: "null"
        });
            
        } else {
            console.log(err);
            res.json({estado: "ERROR"});
        }
    });

});


router.use((error, req, res, next)=>{
    res.status(400).json({
        status: "error",
        message: error.message,
    });
});


module.exports = router;