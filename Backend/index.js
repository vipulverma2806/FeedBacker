const mongoose = require("mongoose");
const express = require("express");
const Feedback = require("./db.model");
const dotenv = require("dotenv")
dotenv.config();
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const PASSWORD = process.env.PASSWORD;
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

//------------------veryfying Admin------------------------
app.get("/getPass/:pass",(req,res)=>{
    const pass = req.params.pass;
    if(pass==PASSWORD){
        res.json(true)
    }else res.json(false)

})
//--------------------get feedback for dashboard--------------
app.get("/getFB",async(req,res)=>{
   try{
    const response = await Feedback.aggregate([
        {$group:{_id:"$teacherName",avgRating:{$avg:"$rating"},count:{$sum:1}}},
        {$sort:{avgRating:-1}}
    ])
    res.json(response)
    console.log(response)
   }catch(err){
    console.log(err)
    res.json(err);
   }
   //------------------------get feedback info------------------
   app.get("/getFBInfo",async(req,res)=>{
    try{
      const response = await Feedback.find()
      res.json(response)
    }catch(err){
      console.log(err)
    }
   })
    
})

//
app.listen(5000, () => console.log("Server is running on PORT 5000"));
