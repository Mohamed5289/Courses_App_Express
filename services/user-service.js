const hash = require('../utils/hash-password');
// services/userServices.js
class UserService {
	constructor(userRepository) {
		this.userRepository = userRepository;
	}
	async addUser(userData) {
		const existingUser = await this.userRepository.getUserByEmail(
			userData.email,
		);
		if (existingUser) return null;
		const hashedPassword = await hash.hashPassword(userData.password);
		userData.password = hashedPassword;
		return await this.userRepository.createUser(userData);
	}
	async getUserById(userId) {
		const user = await this.userRepository.getUserById(userId);
		if (!user) return null;
		return user;
	}
	async loginUser(email, password) {
		const user = await this.userRepository.getUserByEmail(email);
		if (!user) return null;

		const isPasswordValid = await user.comparePassword(password);
		if (!isPasswordValid) return null;

		return user;
	}
	async getAllUsers() {
		const users = await this.userRepository.getAllUsers();
		if (!users) return null;
		return users;
	}

	async getUserByEmail(email) {
		const user = await this.userRepository.getUserByEmail(email);
		if (!user) return null;
		return user;
	}

	async updateUser(userId, updatedData) {
		const user = await this.userRepository.getUserById(userId);
		if (!user) return null;
		return await this.userRepository.updateUser(userId, updatedData);
	}
	async deleteUser(userId) {
		const user = await this.userRepository.getUserById(userId);
		if (!user) return null;
		return await this.userRepository.deleteUser(userId);
	}
	async paginateUsers(page, limit) {
		const paginationResult = await this.userRepository.paginateUsers(
			page,
			limit,
		);
		if (!paginationResult) return null;
		return paginationResult;
	}
}

module.exports = UserService;
