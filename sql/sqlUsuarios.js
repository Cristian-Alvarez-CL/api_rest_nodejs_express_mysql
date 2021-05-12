module.exports = {
	GET_ALL_USERS: {
		description: "Obtiene todos los email y contrasenia de tabla usuarios",
		query: `SELECT email, contrasenia FROM usuarios WHERE estado <> 'eliminado'`
	},
	GET_USER: {
		description: "Obtiene todos los email y contrasenia de tabla usuarios",
		query: `SELECT idusuarios, email FROM usuarios WHERE idusuarios = $1 and estado <> 'eliminado'`
	},
};
