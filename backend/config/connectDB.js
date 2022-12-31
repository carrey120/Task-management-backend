const mongoose = require("mongoose")

const conncetDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected!`);
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

module.exports = conncetDB