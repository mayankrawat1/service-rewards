require("dotenv").config();
const express = require("express");

const routes = require("./src/routes/routes");
const app = express();

require("./src/database/connection");

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", routes);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
