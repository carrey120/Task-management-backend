const express = require("express")
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controller/taskController")
const Task = require("../model/taskModel")
const router = express.Router()

// router.route("/").get(getTasks).post(createTask)
router.post("/", createTask)
router.get("/", getTasks)

// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)
router.get("/:id", getTask)
router.delete("/:id", deleteTask)
router.put("/:id", updateTask)
// router.patch("/:id", updateTask)

module.exports = router