"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const twilioRoutes = require("./routes/twilioRoutes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/twilio", twilioRoutes.routes);

app.listen(process.env.PORT, () =>
  console.log("server is listening on http://localhost:" + process.env.PORT|| 5000)
);
