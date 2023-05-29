const mongoose = require('mongoose');

const MarketplaceInventorySchema =mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  image: { type: String, required: true },
  // description: { type: String, required: true },
  price: { type: Number, required: true },
  originalprice:{type:Number,required:true},
  color: { type: [String], required: true },
  mileage: { type: Number, required: true },
  kmOdometer: { type: Number, required: true }, //
  majorScratches: { type: String, required: true }, //
  originalPaint: { type: String, required: true }, //
  accidentsReported: { type: Number, required: true }, //
  previousBuyers: { type: Number, required: true }, //
  registrationPlace: { type: String, required: true },
  user_id:{type:String,required:true} //
});

const MarketplaceInventory = mongoose.model('Marketplace_Inventory', MarketplaceInventorySchema);

module.exports = MarketplaceInventory;
