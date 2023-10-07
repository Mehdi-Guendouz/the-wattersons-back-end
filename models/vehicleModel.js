const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    plate: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    creation: {
      type: Date,
      default: Date.now,
    },
    state: {
      type: String,
      enum: ['Active', 'Inactive', 'Maintenance'], 
      default: 'Active',
    },
    
  });
  
  module.exports = mongoose.model('Vehicle', vehicleSchema);