module.exports = (sequelize, DataTypes) => {
	const SolvingExam = sequelize.define(
		'SolvingExam',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			score: {
				type: DataTypes.FLOAT,
				allowNull: true,
			},
		},
		{
			timestamps: true,
		},
	);

	return SolvingExam;
};
