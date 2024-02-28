const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');
dotenv.config();


app.use(express.json());
app.use(cors());
//Connect to mongodb database(locally)
mongoose
  .connect(`mongodb+srv://sameersheikhmansoori:mongodb@basiccrud01.7n5mfcw.mongodb.net/?retryWrites=true&w=majority&appName=basicCRUD01`)
  .then(() => {
    console.log("Connected Successfully");
    app.listen(  8000, (err) => {
      if (err) console.log(err);
      console.log(`running at port 8000`);
    });
  })
  .catch((error) => console.log("Failed to connect", error));


//model imported here
const userData = require("./userdataModel");




  //GET
app.get("/", async (req, res) => {
    try {
      const allUsers = await userData.find({});
  
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/", async (req, res) => {
    console.log(req.body);
    const { name, email, age } = req.body;
    try {
      const userAdded = await userData.create({
        name: name,
        email: email,
        age: age,
      });
      res.status(201).json(userAdded);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });

//GET SINGLE USER
app.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const singleUser = await userData.findById({ _id: id });
      res.status(200).json(singleUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  //DELETE
app.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await userData.findByIdAndDelete({ _id: id });
      res.status(201).json(deletedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  //UPDATE
app.patch("/edit/:id", async (req, res) => {
    const { id } = req.params;
    console.log("get body", req.body);
    console.log("get id", id);
    //const { name, email, age } = req.body;
    try {
      const updatedUser = await userData.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
app.listen(4000);