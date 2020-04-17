const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const farmerSchema = new Schema({
  _id: {type: String, required: true},
  email: {type: String, required: true},
  name: { type: String, required: true },
  pno: { type: Number, required: true },
  password: { type: String, required: true },
  location: { type: String, required: true },
}, {
  timestamps: true,
});

const Farmer = mongoose.model('farmer', farmerSchema);

module.exports = Farmer;