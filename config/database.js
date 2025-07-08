const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Courses_App', 'sa', 'mohamed', {
	host: 'localhost',
	dialect: 'mssql',
	dialectOptions: {
		options: {
			trustedConnection: true,
			enableArithAbort: true,
			trustServerCertificate: true,
		},
	},
});

module.exports = sequelize;
