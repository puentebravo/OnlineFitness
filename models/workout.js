const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
    required: "Please enter a workout name.",
  },
  weight: {
    type: Number,
    trim: true,
  },
  sets: {
    type: Number,
    trim: true,
  },
  reps: {
    type: Number,
    trim: true,
  },
  distance: {
    type: Number,
    trim: true,
  },
  duration: {
    type: Number,
    trim: true,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
