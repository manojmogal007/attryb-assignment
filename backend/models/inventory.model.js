const mongoose = require('mongoose');

const MarketplaceInventorySchema = new mongoose.Schema({
  carModel: { type: String, required: true },
  year: { type: Number, required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  mileage: { type: Number, required: true },
  kmOdometer: { type: Number, required: true }, //
  majorScratches: { type: Boolean, required: true }, //
  originalPaint: { type: Boolean, required: true }, //
  accidentsReported: { type: Number, required: true }, //
  previousBuyers: { type: Number, required: true }, //
  registrationPlace: { type: String, required: true }, //
});

const MarketplaceInventory = mongoose.model('Marketplace_Inventory', MarketplaceInventorySchema);

module.exports = MarketplaceInventory;
