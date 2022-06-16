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
    console.log(req.body)
    let user = await UserModel.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({
            msg: "User Already Exists"
        });
    }
    else {
        user = new UserModel({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        await user.save();

        res.json(user);
    }

});


app.listen(3001, () => {
    console.log("Server Running");
});