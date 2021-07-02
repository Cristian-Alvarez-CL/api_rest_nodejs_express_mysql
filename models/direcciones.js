module.exports=(sequelize, type) =>{
    return sequelize.define('direccione',{
        idDireccion: type.INTEGER,
        idCliente: type.INTEGER,
        direccion: type.STRING,
        numero: type.STRING,
        comuna: type.STRING,
        tipo_vivienda: type.STRING,
        num_depto: type.STRING,
        estado: type.STRING,
        f_creacion: type.DATE,
        f_modif: type.DATE,
        f_elimina: type.DATE
    })
}