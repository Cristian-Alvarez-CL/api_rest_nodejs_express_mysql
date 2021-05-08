module.exports=(sequelize, type) =>{
    return sequelize.define('cliente',{
        idCliente: type.INTEGER,
        idUsuario: type.INTEGER,
        nombre: type.STRING,
        apellidos: type.STRING,
        email: type.STRING,
        telefono: type.STRING,
        estado: type.STRING,
        f_creacion: type.DATE,
        f_modif: type.DATE,
        f_eliminacion: type.DATE
    })
}