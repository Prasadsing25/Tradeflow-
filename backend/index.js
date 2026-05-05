require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
    origin: [
        "https://tradeflow-frontend.onrender.com",  // Frontend URL
        "https://tradeflow-dashboard.onrender.com" // Dashboard URL
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(bodyParser.json());
app.use(express.json());

//user authentication
// backend/index.js
const { UserModel } = require("./model/UserModel");

//SIGNUP ROUTE
app.post("/signup", async (req, res) => {
    try {
        const { email, password, username } = req.body;
        const existingUser = await UserModel.findOne({email});
        if (existingUser) return res.json({message: "User already exists", success: false });

        const user = await UserModel.create({email, password, username });
        res.json({message: "Signed UP!", success: true, user: { username: user.username, email: user.email } })
    } catch (error) {
        res.status(500).json({message: "Error creating user", success: false});
    }
});

// LOGIN ROUTE
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.json({ message: "User not found", success: false });

    const isMatch = await require('bcryptjs').compare(password, user.password);
    if (!isMatch) return res.json({ message: "Invalid password", success: false });

    res.json({ success: true, 
        user: { 
            id: user._id, 
            username: user.username, 
            email: user.email 
        } 
    });
});

// Add this near your other routes in backend/index.js
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

//Fetch data 
app.get("/addHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/addPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.get("/addOrders", async (req, res) => {
    try {
        const {userId} = req.query;
        if (!userId) return res.status(400).json({ message: "User Id required"});

        let userOrders = await OrdersModel.find({ user: userId});
        res.json(userOrders);
    } catch (err) {
        res.status(500).json({ message: "Error fetching orders", error: err});
    }
});

app.post("/newOrder", async (req, res) => {
    try {
        const { name, qty, price, mode, userId } = req.body;

        let newOrder = new OrdersModel ({
            name,
            qty,
            price,
            mode,
            user: userId
        });

        await newOrder.save();
        res.status(201).send("Order Placed")
    } catch (err) {
        res.status(500).send("Error placing order")
    }
});


app.listen(PORT, () => {
    console.log("App Started");
    mongoose.connect(uri);
    console.log("DB Connected");
});