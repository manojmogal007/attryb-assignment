const mongoose=require('mongoose')

const oemspecsSchema =mongoose.Schema({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    leastPrice: { type: Number, required: true },
    availableColors: { type: [String], required: true },
    mileage: { type: Number, required: true },
    power: { type: Number, required: true },
    maxSpeed: { type: Number, required: true },
  });
  
  const OEMSpecs = mongoose.model('oemspecs', oemspecsSchema);
  
  module.exports = OEMSpecs;



//   {
//     "name":"swift",
//     "year":"2010",
//     "leastPrice":700000,
//     "availableColors":["red","white","black","blue"],
//     "mileage":20,
//     "power":55,
//     "maxSpeed":140
//   }