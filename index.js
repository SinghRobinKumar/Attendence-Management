const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/index");

const App = express();

App.use(bodyParser.json());
App.use(cors());
// App.use(bodyParser.urlencoded({ extended: false }));

App.use("/", routes.router);

//For Environment From .env file
require("dotenv").config();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(result => App.listen(PORT))
  .catch(err => console.log(err));

const path = require("path");

//* IMPORT build folder from client
App.use(express.static(path.resolve(__dirname, "./client/build")));
//*Ensure All the Routes Are Working
App.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
