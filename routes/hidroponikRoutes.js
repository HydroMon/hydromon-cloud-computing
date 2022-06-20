const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middlewares/auth');
const hidroponikController = require('../controllers/hidroponikController');

/**
 * Get all hydroponic system
 */
 router.get('/', hidroponikController.list);

 /**
  * Get hydroponic system by id
  */
 router.get('/:id', authenticateJWT, hidroponikController.show);
  /**
  * Get hydroponic system by user id
  */
   router.get('/getbyuser/:id_user', authenticateJWT, hidroponikController.hidroponikByUser);
 
 /**
  * Add hydroponic system's data
  */
 router.post('/', authenticateJWT, hidroponikController.create);
 
 /**
  * Update hydroponic system's data
  */
 router.put('/:id', authenticateJWT, hidroponikController.update);
 
 /**
  * Delete hydroponic system's data
  */
 router.delete('/:id', authenticateJWT, hidroponikController.remove);
 
 module.exports = router;