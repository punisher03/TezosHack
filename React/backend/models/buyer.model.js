const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buyerSchema = new Schema({
  _id: {type: String, required: true},
  name: {
    type: String,
    required: true},
    email: { type: String, required: true },  
  pno: { type: Number, required: true },
  password: { type: String, required: true },
  location: { type: String, required: true },
}, {
  timestamps: true,
});

const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = Buyer;