const Task = require("../models/task.schema");

//api for creating tasks

module.exports.createTask = async (req, res, next) => {
  console.log(req.body);
  const { title, isCompleted, startTime, endTime, repeated } = req.body;

  const newTask = new Task({
    title,
    isCompleted,
    startTime,
    endTime,
    repeated,
  });

  await newTask
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).send({ message: "Success", data: result });
    })
    .catch((err) => {
      console.error(err);
    });

  console.log(newTask);
};

//for fetching all tasks

module.exports.getAllTasks = async (req, res, next) => {
  await Task.find()
    .then((result) => {
      console.log(result);
      res.status(200).send({ message: "Success", data: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

//for fetching a single task

module.exports.getSingleTask = async (req, res, next) => {
  const id = req.params.id;
  await Task.findById(id)
    .then((result) => {
      console.log(result);
      res.status(200).send({ message: "Success", data: result });
    })
    .catch((err) => {
      console.log(err);
    });
};
