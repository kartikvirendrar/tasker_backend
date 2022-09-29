const Task = require("../models/task");
const User = require("../models/user");

exports.createTask = async (req, res) => {
    try {
      const { user,title,description,fDate,tDate,priority,completed } = req.body;
      res.json(await new Task({ user,title,description,fDate,tDate,priority,completed }).save());
    } catch (err) {
      console.log(err);
      res.status(400).send("Creating Task failed");
    }
};

exports.getTasks = async (req, res) => {
  const {id}=req.params;
  let user = await User.findById(id).exec(); 
  let task = await Task.find({user}).populate("user").exec();
  res.json(task);
};

exports.getTaskById = async (req, res) => {
  const {id}=req.params;
  let task = await Task.findById(id);
  res.json(task);
};

exports.updateTask = async (req, res) => {
  try {
    const {id}=req.params;
    const { title,description,fDate,tDate,priority } = req.body;
    res.json(await Task.findByIdAndUpdate(id, {title: title, description: description, fDate: fDate, tDate: tDate, priority: priority}));
  } catch (err) {
    console.log(err);
    res.status(400).send("Updating Task failed");
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const {id} = req.params;
    res.json(await Task.findByIdAndDelete(id));
  } catch (err) {
    console.log(err);
    res.status(400).send("Updating Task failed");
  }
};

exports.toggleCompleted = async (req, res) => {
  try {
    const { taskId } = req.params;
    let task = await Task.findById(taskId);
    const compl = task.completed;
    if (compl == false) {
      task.completed = true;
      await task.save();      
  }
    else {
      task.completed = false;
      await task.save();      
    }
    res.json("done");
  } catch (err) {
    console.log(err);
    res.status(400).send("Toogle failed");
  }
};