module.exports=(sequelize, type) =>{
    return sequelize.define('usuario',{
        idUsuario: type.INTEGER,
        email: type.STRING,
        contrasenia: type.STRING,
        f_crea: type.DATE,
        f_modif: type.DATE,
        f_elina: type.DATE,
    })
}