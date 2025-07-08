const solvingExam = require('./solvingExam');

module.exports = (sequelize, DataTypes) => {
	const solvingQuestion = sequelize.define('SolvingQuestion', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		ExamId: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	});
	return solvingQuestion;
};
