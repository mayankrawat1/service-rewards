const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI, { dbName: "tab-user-reward" })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
