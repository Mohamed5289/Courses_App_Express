const { and } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	const question = sequelize.define('Question', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		text: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: { msg: 'Question text is required' },
				len: {
					args: [5, 500],
					msg: 'Question text must be between 5 and 500 characters long',
				},
			},
		},
		createdAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: false,
		},
		updatedAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: false,
		},
		answer: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len: {
					args: [0, 100],
					msg: 'Answer must be less than 100 characters long',
				},
			},
		},
	});

	return question;
};
