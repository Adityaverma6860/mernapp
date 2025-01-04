const express = require("express");
const app = express();
const mongoose = require("mongoose");
require = ("./models/userModel");
const router = express.Router();

// Create  // Post 
router.post("/",async(req,res)=>{
    const { name ,email,age } = req.body;
 
    try{  
    const userAdded = await User.Create({
        name: name,
        email:email, 
        age :age,
    });
    res.status(201).json(userAdded)
 }catch (error){
    console.log(error)
    res.send(400).json({error:error.message})
 }
 });

  
 // Read // Get  
 router.get("/", async(req,res)=>{
    try{                                     
    const showAll = await User.find();
    res.status(200).json(showAll);
 } catch(error) {
    res.send(500).json({ error: error.message });
 }
 });
module.exports = router;
 
 
 
 