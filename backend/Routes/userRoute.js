const express = require("express");
const app = express();
const mongoose = require("mongoose");
require = ("./models/userModel");
const router = express.Router();

//CREATE   // Post 
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
// router.post("/", async (req, res) => {
//    console.log(req.body);
//    const { name, email, age } = req.body;
//    try {
//      const userAdded = await userData.create({
//        name: name,
//        email: email,
//        age: age,
//      });
//      res.status(201).json(userAdded);
//    } catch (error) {
//      console.log(error);
//      res.status(400).json({ error: error.message });
//    }
//  });

  
 // Read // //GET
 router.get("/", async(req,res)=>{
    try{                                     
    const showAll = await User.find();
    res.status(200).json(showAll);
 } catch(error) {
    res.send(500).json({ error: error.message });
 }
 });
//  router.get("/", async (req, res) => {
//    try {
//      const allUsers = await userData.find();
//      res.status(200).json(allUsers);
//    } catch (error) {
//      res.status(500).json({ error: error.message });
//    }
//  });

// //GET SINGLE USER

router.get("/",async (req,res)=>{
const{id} = req.params;
 try {
   const singleUser = await User.findById({_id:id});
   res.status(200).json(singleUser); 
 }catch(error){
   console.log(error);
   res.status(500).json({error:error.message});
 }
});

//DELETE
router.delete("/:id", async (req, res) => {
   const { id } = req.params;
   try {
     const deletedUser = await userData.findByIdAndDelete({ _id: id });
     res.status(201).json(deletedUser);
   } catch (error) {
     res.status(400).json({ error: error.message });
   }
 });

 //UPDATE  
//  Get single data

router.patch("id", async (req, res) => {
   const { id } = req.params;
  
   const { name, email, age } = req.body;
   try {
     const updateUser = await user.findByIdAndUpdate(id, req.body, {
       new: true,
     });
     res.status(200).json(updateUser);
   } catch (error) {
     res.status(400).json({ error: error.message });
   }
 });

// router.patch("/edit/:id", async (req, res) => {
//    const { id } = req.params;
//    console.log("get body", req.body);
//    console.log("get id", id);
//    //const { name, email, age } = req.body;
//    try {
//      const updatedUser = await userData.findByIdAndUpdate(id, req.body, {
//        new: true,
//      });
//      res.status(200).json(updatedUser);
//    } catch (error) {
//      res.status(400).json({ error: error.message });
//    }
//  });

module.exports = router;
 
 
 
 