const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/login', authController.login);

router.get('/user', authMiddleware, authController.getUserInfo);

router.post('/update', authController.updateUser);

router.post('/register', authController.register);


module.exports = router;
