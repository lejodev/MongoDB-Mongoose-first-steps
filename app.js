const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
require("dotenv/config");

const postRoutes = require("./routes/posts");

app.use("/posts", postRoutes);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to the database");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
