const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user: 'testBD',
    password: 'testBD',
    database: 'prueba'
});

mysqlConnection.connect(function (error) {

    if (error) {
        console.log(error);return;
    } else {
        console.log('BD conectada');
    }
    
});

module.exports= mysqlConnection;