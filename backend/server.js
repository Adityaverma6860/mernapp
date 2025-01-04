 // SIMPLE CODE FOR CONNECTION TO BACKEND

// const express =require("express");
// const app = express();
// const mongoose = require("mongoose");

//  mongoose.connect("mongodb://127.0.0.1:27017/merndb").
//  then(()=>{
//     console.log("Connected  successfully");
//  }).catch((error)=> {
//  console.log("error",error);
//  });  
    
// app.get("/",(req,res)=>{
//      res.send("api running giodjgo fgdg");
// });
// app.listen(4000); 


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

 mongoose.connect(process.env.URI)
 .then(()=>{
    console.log("Connected  successfully");
    app.listen(process.env.PORT || 8000,(err)=>{
      if(err) console.log(err);
       console.log("running successfuly at",process.env.PORT);
    }); 
 })
 .catch((error)=> {
 console.log("error",error);
 });  
    // Middleware /Route /Api    
 app.get("/",(req,res)=>{
      res.send("api running giodjgo fgdg");
 });  