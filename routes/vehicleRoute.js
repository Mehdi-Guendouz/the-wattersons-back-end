const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/vehicles', authMiddleware, vehicleController.createVehicle);

router.get('/vehicles', authMiddleware, vehicleController.getUserVehicles);

router.put('/vehicles/:id', authMiddleware, vehicleController.updateVehicleState);

router.delete('/vehicles/:id', authMiddleware, vehicleController.deleteVehicle);

router.get('/vehicles/:id', authMiddleware, vehicleController.getVehicleInfo);

router.get('/vehicles/search', authMiddleware, vehicleController.searchVehicles);

module.exports = router;
