module.exports = {
	GET_ALL_USERS: {
		description: 'Obtiene todos los email y contrasenia de tabla usuarios',
		query: `SELECT idusuarios, email FROM usuarios WHERE estado <> 'eliminado'`
	},
	GET_USER: {
		description: 'Obtiene todos los email y contrasenia de tabla usuarios',
		query: `SELECT idusuarios, email FROM usuarios WHERE idusuarios = ? and estado <> 'eliminado'`
	},
	POST_REG_USER:{
		description: 'Inserta usuario con email y clave',
		query: `INSERT INTO usuarios (email,contrasenia,f_creacion) VALUES (?, ?, ?)`
	},
};
