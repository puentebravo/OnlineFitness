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

  app.put("/api/workouts/:id", (req, res) => {
    const query = req.params.id;
    const update = req.body;
    Workout.findOneAndUpdate(query, update, [{ new: true }]).then(
      (updateWorkout) => {
        res.json(updateWorkout);
      }
    );
  });

  app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then((newWorkout) => {
        res.json(newWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
