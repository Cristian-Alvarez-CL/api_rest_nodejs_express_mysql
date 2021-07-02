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
		query: `INSERT INTO usuarios (email,contrasenia,estado, f_creacion) VALUES (?, ?, ?, ?)`
	},
	POST_VALID_PASS:{
		description: 'Obtiene la clave desde el email de un usuario',
		query: `SELECT contrasenia FROM usuarios WHERE email = ? and estado <> 'eliminado'`
	},
	POST_SEARCH_EMAIL:{
		description: 'Obtiene el email de un usuario',
		query: `SELECT email FROM usuarios WHERE email = ? and estado <> 'eliminado'`
	},
};
