// const router = require("express").Router();
const Workout = require("../models/Workout.js");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    Workout.find({}).then((data) => {
      res.json(data);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then((workout) => {
        res.json(workout);
      });
  });
};
