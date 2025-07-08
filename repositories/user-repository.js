class UserRepository {
	constructor(userModel) {
		this.User = userModel;
	}

	// إنشاء مستخدم جديد
	async createUser(userData) {
		return await this.User.create(userData);
	}

	// جلب مستخدم بواسطة ID واستثناء كلمة المرور
	async getUserById(userId) {
		return await this.User.findByPk(userId, {
			attributes: { exclude: ['password'] },
		});
	}

	// جلب كل المستخدمين واستثناء كلمة المرور
	async getAllUsers() {
		return await this.User.findAll({
			attributes: { exclude: ['password'] },
		});
	}

	// جلب مستخدم بواسطة البريد الإلكتروني (يُستخدم غالبًا للتحقق من تسجيل الدخول)
	async getUserByEmail(email) {
		return await this.User.findOne({
			where: { email: email },
		});
	}

	// تحديث بيانات مستخدم بواسطة ID
	async updateUser(userId, updatedData) {
		return await this.User.update(updatedData, {
			where: { id: userId },
		});
	}

	// حذف مستخدم بواسطة ID
	async deleteUser(userId) {
		return await this.User.destroy({
			where: { id: userId },
		});
	}

	// جلب مستخدمين مع دعم التصفّح (pagination)
	async paginateUsers(page, limit) {
		const offset = (page - 1) * limit;
		const { count, rows } = await this.User.findAndCountAll({
			offset: offset,
			limit: limit,
			attributes: { exclude: ['password'] },
		});
		return {
			totalItems: count,
			users: rows,
			totalPages: Math.ceil(count / limit),
			currentPage: page,
		};
	}
}

module.exports = UserRepository;
