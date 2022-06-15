const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middlewares/auth');
const dataHidroponikController = require('../controllers/dataHidroponikController');

/**
 * Get all hydroponic data
 */
router.get('/', authenticateJWT, dataHidroponikController.list);

/**
 * Get hydroponic data by id
 */
router.get('/:id', authenticateJWT, dataHidroponikController.show);

/**
 * Get hydroponic today's data by id
 */
router.get('/today/:id_hidroponik', authenticateJWT, dataHidroponikController.currentDate);

/**
 * Get newest hydroponic data by id
 */
router.get('/newest/:id_hidroponik', authenticateJWT, dataHidroponikController.showNewestData);

/**
 * Add hydroponic data
 */
router.post('/', authenticateJWT, dataHidroponikController.create);

/**
 * Update hydroponic data
 */
router.put('/:id', authenticateJWT, dataHidroponikController.update);

/**
 * Delete hydroponic data
 */
router.delete('/:id', authenticateJWT, dataHidroponikController.remove);

module.exports = router;