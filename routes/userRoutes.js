const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * Get all user
 */
router.get('/', userController.list);

/**
 * Get user by id
 */
router.get('/:id', userController.show);

/**
 * Add user
 */
router.post('/', userController.create);

/**
 * Update user
 */
router.put('/:id', userController.update);

/**
 * Delete user
 */
router.delete('/:id', userController.remove);

module.exports = router;