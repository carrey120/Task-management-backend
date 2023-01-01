const dotenv = require("dotenv").config()
const express = require("express")
const conncetDB = require("./config/connectDB")
const app = express()
const PORT = process.env.PORT || 1000
const mongoose = require("mongoose")
const Task = require("./model/taskModel")
const taskRoutes = require("./routes/taskRoute")
const cors = require("cors")



// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
  origin: ["http://localhost:3000/", "https://task-manager-app-epg1.onrender.com"]
}))
app.use("/api/tasks", taskRoutes)


// const logger = (req, res, next) => {
//   console.log("Middleware ran");
//   console.log(req.method);
//   next()
// }

// Routes
app.get("/", (req, res) => {
  res.send("Home Page")
})



// Second way to connect mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  })
  .catch((err) => console.log(err))



// First way to connect mongodb
// const startServer = async () => {
//   try {
//     await conncetDB()
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     })
//   } catch (error) {
//     console.log(error);
//   }
// }

// startServer()

