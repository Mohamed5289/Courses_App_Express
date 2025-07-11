const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');
const userRoutes = require('./routes/user-route');
const httpStatusText = require('./utils/httpStatusText');
const path = require('path');
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/users', userRoutes);
app.all('/*split', (req, res, next) => {
	return res
		.status(404)
		.json({ status: httpStatusText.ERROR, data: null, message: 'Not Found' });
});
app.use((err, req, res, next) => {
	res.status(err.status || 500).json({
		status: httpStatusText.ERROR,
		data: null,
		message: err.message || 'Internal Server Error',
	});
});

db.sequelize
	.sync()
	.then(() => console.log('Database synced'))
	.catch((err) => console.error('Error syncing database:', err));

app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});
