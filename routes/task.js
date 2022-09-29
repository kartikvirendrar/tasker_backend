const express = require("express");
const router = express.Router();

const { createTask, getTasks, toggleCompleted, getTaskById, updateTask, deleteTask } = require("../controllers/task");

router.post("/task", createTask);
router.get("/getTasks/:id", getTasks);
router.get("/task/:id", getTaskById);
router.post("/task/update/:id", updateTask);
router.get("/task/delete/:id", deleteTask);
router.get("/toggle/:taskId", toggleCompleted);
module.exports = router;