if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");

const mongoose = require("mongoose");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//API_ROUTES
const apiRoutes = require("./routes/api");

app.use("/api/v1/", apiRoutes);

// SERVER CONNECTION
mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => {
    console.log("Database Connected!!");
    const server = app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
