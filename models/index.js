const { Sequelize } = require('sequelize');

const sequelize = require('../config/database.js');

// Import all models
const User = require('./user')(sequelize, Sequelize.DataTypes);
const Course = require('./course.js')(sequelize, Sequelize.DataTypes);
const UserCourse = require('./userCourse')(sequelize, Sequelize.DataTypes);
const Instructor = require('./instructor')(sequelize, Sequelize.DataTypes);
const InstructorCourse = require('./instructorCourse')(
	sequelize,
	Sequelize.DataTypes,
);
const Exam = require('./exam')(sequelize, Sequelize.DataTypes);
const SolvingExam = require('./solvingExam')(sequelize, Sequelize.DataTypes);
const Question = require('./question')(sequelize, Sequelize.DataTypes);
const SolvingQuestion = require('./solvingQuestion')(
	sequelize,
	Sequelize.DataTypes,
);

// =======================
// 🔗 Relationships Setup
// =======================

// Many-to-Many: User <--> Course
User.belongsToMany(Course, {
	through: UserCourse,
	foreignKey: 'userId',
	otherKey: 'courseId',
});

Course.belongsToMany(User, {
	through: UserCourse,
	foreignKey: 'courseId',
	otherKey: 'userId',
});

// Many-to-Many: Instructor <--> Course
Instructor.belongsToMany(Course, {
	through: InstructorCourse,
	foreignKey: 'instructorId',
	otherKey: 'courseId',
});

Course.belongsToMany(Instructor, {
	through: InstructorCourse,
	foreignKey: 'courseId',
	otherKey: 'instructorId',
});

// One-to-Many: Course --> Exam
Course.hasMany(Exam);
Exam.belongsTo(Course);

User.hasMany(SolvingExam);
SolvingExam.belongsTo(User);

// One-to-Many: Exam --> Question
Exam.hasMany(Question);
Question.belongsTo(Exam);

// One-to-Many: User --> SolvingExam
User.hasMany(SolvingExam);
SolvingExam.belongsTo(User);

// One-to-Many: Exam --> SolvingExam
Exam.hasMany(SolvingExam);
SolvingExam.belongsTo(Exam);

// One-to-Many: SolvingExam --> SolvingQuestion
SolvingExam.hasMany(SolvingQuestion);
SolvingQuestion.belongsTo(SolvingExam);

// One-to-Many: Question --> SolvingQuestion
Question.hasMany(SolvingQuestion);
SolvingQuestion.belongsTo(Question);

// Export models
const db = {
	sequelize,
	Sequelize,
	User,
	Course,
	UserCourse,
	Instructor,
	InstructorCourse,
	Exam,
	SolvingExam,
	Question,
	SolvingQuestion,
};

module.exports = db;
