const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller')

router.post('/api/veterinary', controller.post);
router.put('/api/veterinary/:id', controller.putById);
router.delete('/api/veterinary/:id', controller.deleteById);
router.get('/api/veterinary/:id', controller.getById);
router.get('/api/veterinary', controller.getAll);


module.exports = router;