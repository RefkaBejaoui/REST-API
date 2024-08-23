const mongoose = require("mongoose");
const houseSchema = new mongoose.Schema({
  adresse: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    default: 0,
  },
  surface: {
    type: String,
    required: true,
  },
  nbrRoom: {
    type: String,
    required: true,
  },
});
const house = mongoose.model("houses", houseSchema);
module.exports = house;
