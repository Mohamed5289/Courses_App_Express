const express = require('express');
const router = express.Router();
const { User } = require('../models'); // Sequelize model
const UserRepository = require('../repositories/user-repository');
const UserService = require('../services/user-service');
const UserController = require('../controllers/user-controller');
const authenticateJWT = require('../middleware/authentication');
const authorizeRole = require('../middleware/authorizeRole');
const roles = require('../utils/roles');
const upload = require('../utils/upload');

// Dependency injection
const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// Routes
router
	.route('/')
	.get(
		authenticateJWT,
		authorizeRole(roles.ADMIN, roles.INSTRACTOR),
		userController.getAllUsers,
	);
router.route('/login').post(userController.loginUser);
router.route('/register').post(upload.single('avatar'), userController.addUser);
router
	.route('/email/:email')
	.get(
		authenticateJWT,
		authorizeRole(roles.ADMIN),
		userController.getUserByEmail,
	);
router
	.route('/:id', authenticateJWT)
	.get(authenticateJWT, userController.getUserById)
	.put(authenticateJWT, userController.updateUser)
	.delete(authenticateJWT, userController.deleteUser);

router.route('/paginate', authenticateJWT).get(userController.paginateUsers);

module.exports = router;
