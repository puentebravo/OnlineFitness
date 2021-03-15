const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchmea = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a workout name.",
  },
  weight: {
    type: Number,
    trim: true,
    required: "Please enter a weight.",
  },
  sets: {
    type: Number,
    trim: true,
    required: "Please enter how many sets were completed.",
  },
  reps: {
    type: Number,
    trim: true,
    required: "Please enter the number of reps per set.",
  },
  duration: {
    type: Number,
    trim: true,
    required: "Please enter a workout duration.",
  },
});

const Resistance = mongoose.model("Resistance", resistanceSchmea);

module.exports = Resistance;
