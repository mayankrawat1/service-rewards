const express = require("express");
const { PORT } = require("./config");
const { dbconnect } = require("./src/database/connection");

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/", require("./src/routes/routes"));

//database connection
dbconnect();

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
