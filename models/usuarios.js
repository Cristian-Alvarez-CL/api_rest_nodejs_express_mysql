module.exports=(sequelize, type) =>{
    return sequelize.define('usuario',{
        idUsuario: type.INTEGER,
        email: type.STRING,
        contrasenia: type.STRING,
        f_creacion: type.DATE,
        f_modif: type.DATE
    })
}