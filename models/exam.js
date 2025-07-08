module.exports = (sequelize, DataTypes) => {
	const Exam = sequelize.define('Exam', {
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
		date: {
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				isDate: { msg: 'Valid date is required' },
				notEmpty: { msg: 'Date is required' },
			},
		},
	});

	return Exam;
};
