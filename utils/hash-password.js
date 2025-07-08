const bcrypt = require('bcrypt');

const hashPassword = async (plainPassword) => {
	const saltRounds = 10; // كلما زاد الرقم، زاد الأمان لكن زاد وقت التنفيذ
	const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
	return hashedPassword;
};

const comparePassword = async (plainPassword, hashedPassword) => {
	const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
	return isMatch;
};

module.exports = {
	hashPassword,
	comparePassword,
};
