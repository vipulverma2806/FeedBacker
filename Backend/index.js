const mongoose = require("mongoose");
const express = require("express");
const Feedback = require("./db.model");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
//-----------------------MongoDB connection-------------------------------
mongoose
  .connect(
    "mongodb+srv://vipulverma:vipulverma@cluster0.uanjlhb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

//-------------------------saving feedback data in db-------------------------

app.post("/submit", async (req, res) => {
  try {
    const response = await Feedback.create(req.body);
    console.log(response)
    res.json(response);
  } catch (err) {
    console.log(err)
    res.json("Not working");
  }
});

//
app.listen(5000, () => console.log("Server is running on PORT 5000"));
