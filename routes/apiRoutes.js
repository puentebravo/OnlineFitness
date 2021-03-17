const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({}).then((data) => {
    res.json(data);
  });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({ $limit: 7 })
    .sort({ date: -1 })
    .then((workout) => {
      res.json(workout);
    });
});
