const Workout = require("../models/Workout.js");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalWeight: { $sum: "$weight" },
          totalDuration: { $sum: "$duration" },
        },
      },
    ]).then((data) => {
      res.json(data);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalWeight: { $sum: "$weight" },
          totalDuration: { $sum: "$duration" },
        },
      },
      {
        $limit: 7,
      },
      {
        $sort: { day: -1, _id: -1 },
      },
    ]).then((workout) => {
      res.json(workout);
    });
  });
};
