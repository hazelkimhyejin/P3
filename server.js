require("dotenv").config();
const express = require('express');
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT ?? 3000;
const UserController = require("./controller/UserController")
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI);

app.use(cors())
app.use("/api", UserController)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})