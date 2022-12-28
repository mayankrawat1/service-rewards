const mongoose = require("mongoose");
const { MONGO_URI } = require("../../config");

module.exports.dbconnect = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(MONGO_URI);
    console.log("Connect to database");
  } catch (err) {
    console.log(err.message);
  }
};
