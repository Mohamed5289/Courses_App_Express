module.exports = (sequelize, DataTypes) => {
	const Course = sequelize.define('Course', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: { msg: 'Title is required' },
				len: {
					args: [2, 100],
					msg: 'Title must be between 2 and 100 characters long',
				},
			},
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			validate: {
				len: {
					args: [0, 500],
					msg: 'Description must be less than 500 characters long',
				},
			},
		},
		duration: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isInt: { msg: 'Duration must be an integer' },
				min: {
					args: 1,
					msg: 'Duration must be at least 1 hour',
				},
			},
		},
	});

	return Course;
};
