const express = require('express');
const router = express.Router();
const dataHidroponikController = require('../controllers/dataHidroponikController');

/**
 * Get all hydroponic data
 */
router.get('/', dataHidroponikController.list);

/**
 * Get hydroponic data by id
 */
router.get('/:id', dataHidroponikController.show);

/**
 * Add hydroponic data
 */
router.post('/', dataHidroponikController.create);

/**
 * Update hydroponic data
 */
router.put('/:id', dataHidroponikController.update);

/**
 * Delete hydroponic data
 */
router.delete('/:id', dataHidroponikController.remove);

module.exports = router;