const express = require("express");
const { PORT } = require("./config");
const { dbconnect } = require("./src/database/connection");
const errorHandler = require("./src/middlewares/errorHandler");

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/service-reward", require("./src/routes/routes"));

// error handler
app.use(errorHandler);

// database connection
dbconnect();

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
