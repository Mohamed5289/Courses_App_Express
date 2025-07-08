module.exports = (sequelize, DataTypes) => {
	const UserCourse = sequelize.define(
		'UserCourse',
		{
			userId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			courseId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
		},
		{
			timestamps: true,
			tableName: 'UserCourses',
		},
	);

	return UserCourse;
};
