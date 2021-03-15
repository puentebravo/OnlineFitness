const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please input a cardio type.",
  },
  distance: {
    type: Number,
    trim: true,
    required: "Please enter the distance covered.",
  },
  duration: {
    type: Number,
    trim: true,
    required: "Please enter a workout duration.",
  },
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;
