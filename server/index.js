const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();

const UserModel = require('./models/Users');


app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mycookbook.dqrli.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`);

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.get("/authUser", async (req, res) => {
    UserModel.find({}, (err, result) => {

    });
});

app.post("/newUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});


app.listen(3001, () => {
    console.log("Server Running");
});