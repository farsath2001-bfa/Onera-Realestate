const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: String, required: true },
    zipCode: { type: String },
    address: { type: String },
    visitDate: { type: String },
    visitTime: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Lead', leadSchema);