const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `--> mongoDB connected to ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {}
};

module.exports = connectDB;
