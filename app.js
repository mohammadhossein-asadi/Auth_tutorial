const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();

const app = express();

app.get("/", async (req, res, next) => {
  res.send("Hello from express");
});

app.use(async (req, res, next) => {
  //# Whidout using http-errors package
  //   const error = new Error("Not found");
  //   error.status = 404;
  //   next(error);
  // # Using http-errors package
  next(createError.NotFound("This route does not exist"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
