const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middlewares/auth');
const userController = require('../controllers/userController');

/**
 * Get all user
 */
router.get('/', authenticateJWT, userController.list);

/**
 * Get user by id
 */
router.get('/:id', authenticateJWT, userController.show);

/**
 * Add user
 */
router.post('/', authenticateJWT, userController.create);

/**
 * Update user
 */
router.put('/:id', authenticateJWT, userController.update);

/**
 * Delete user
 */
router.delete('/:id', authenticateJWT, userController.remove);

module.exports = router;