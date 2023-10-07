const User = require('../models/userModel');
const Vehicle = require('../models/vehicleModel');

exports.createVehicle = async (req, res) => {
    try {
      const { name, plate, type, state } = req.body;
      const vehicle = new Vehicle({ name, plate, type, state });
      await vehicle.save();
      res.status(201).json(vehicle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.getUserVehicles = async (req, res) => {
    try {
      const userId = req.user.userId; 
      const vehicles = await Vehicle.find({ userId }); 
      res.json(vehicles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.updateVehicleState = async (req, res) => {
    try {
      const { state } = req.body;
      const vehicleId = req.params.id;
  
      const updatedVehicle = await Vehicle.findByIdAndUpdate(
        vehicleId,
        { state },
        { new: true }
      );
  
      if (!updatedVehicle) {
        return res.status(404).json({ message: 'Vehicle not found' });
      }
  
      res.json(updatedVehicle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.deleteVehicle = async (req, res) => {
    try {
      const vehicleId = req.params.id;
      await Vehicle.findByIdAndDelete(vehicleId);
      res.status(204).send(); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.getVehicleInfo = async (req, res) => {
    try {
      const vehicleId = req.params.id;
  
      const vehicle = await Vehicle.findById(vehicleId);
  
      if (!vehicle) {
        return res.status(404).json({ message: 'Vehicle not found' });
      }
  
      res.json(vehicle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


exports.searchVehicles = async (req, res) => {
    try {
      const vehicles = await Vehicle.find({
        $or: [
          { name: { $regex: req.query, $options: 'i' } },
          { plate: { $regex: req.query, $options: 'i' } },
        ],
      });
  
      res.json(vehicles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };