const express = require('express');

const app = express();

//configuracion de puerto
app.set ('port', process.env.PORT || 4000);

//Middlewares
app.use(express.json({ type: 'application/json' }));
app.use(express.urlencoded({ extended: true}));

const apiRouter = require('./routes/api');

app.use('/api', apiRouter);

app.listen(app.get ('port'), () =>{
    console.log('Servidor iniciado!', app.get ('port'));
});