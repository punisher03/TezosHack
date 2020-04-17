const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  _id: {type: String, required: true},
  name: { type: String, required: true },
  pno: { type: Number, required: true },
  password: { type: String, required: true },
  location: { type: String, required: true },
});

const Customer = mongoose.model('customer', farmerSchema);

module.exports = Customer;