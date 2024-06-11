const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.getUserProfile);
router.post('/:id/avatar', userController.upload.single('profilePhoto'), userController.uploadProfilePhoto);

module.exports = router;
