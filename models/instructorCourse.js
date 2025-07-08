module.exports = (sequelize, DataTypes) => {
	const InstructorCourse = sequelize.define(
		'InstructorCourse',
		{
			courseId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			instructorId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
		},
		{
			timestamps: true,
			tableName: 'InstructorCourses',
		},
	);

	return InstructorCourse;
};
