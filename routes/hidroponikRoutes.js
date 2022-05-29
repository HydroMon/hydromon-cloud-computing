const express = require('express');
const router = express.Router();
const hidroponikController = require('../controllers/hidroponikController');

/**
 * Get all hydroponic system
 */
 router.get('/', hidroponikController.list);

 /**
  * Get hydroponic system by id
  */
 router.get('/:id', hidroponikController.show);
 
 /**
  * Add hydroponic system's data
  */
 router.post('/', hidroponikController.create);
 
 /**
  * Update hydroponic system's data
  */
 router.put('/:id', hidroponikController.update);
 
 /**
  * Delete hydroponic system's data
  */
 router.delete('/:id', hidroponikController.remove);
 
 module.exports = router;