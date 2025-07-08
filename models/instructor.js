module.exports = (sequelize, DataTypes) => {
	const Instructor = sequelize.define('Instructor', {
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: { msg: 'First name is required' },
				len: {
					args: [2, 100],
					msg: 'First name must be between 2 and 100 characters long',
				},
			},
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: { msg: 'Last name is required' },
				len: {
					args: [2, 100],
					msg: 'Last name must be between 2 and 100 characters long',
				},
			},
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: { msg: 'Valid email is required' },
				notEmpty: { msg: 'Email is required' },
				len: {
					args: [5, 100],
					msg: 'Email must be between 5 and 100 characters long',
				},
			},
		},
		bio: {
			type: DataTypes.TEXT,
			allowNull: true,
			validate: {
				len: {
					args: [0, 500],
					msg: 'Bio must be less than 500 characters long',
				},
			},
		},
	});

	return Instructor;
};
