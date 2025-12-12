require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const {HoldingsModel} = require('./model/HoldingsModel');
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');

const PORT = process.env.PORT || 4000;
const url = process.env.MONGO_URL;

const app = express();

// ✅ CORS को सही origin के साथ, सबसे ऊपर रखो
app.use(cors({
  origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],   // आपका React app
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// ✅ Routes इससे पहले define करो, listen के ऊपर
app.use("/", authRoute);

const jwt = require("jsonwebtoken");

app.get("/me", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json({ status: false });

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    return res.json({
      status: true,
      userId: decoded.id   // 👈 send unique user ID
    });

  } catch (err) {
    return res.json({ status: false });
  }
});

app.get('/allHoldings', async (req,res)=>{
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async (req,res)=>{
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post('/newOrder',async(req,res)=>{
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,        
  });
  newOrder.save();
  res.send("order saved!");
});

app.listen(PORT , () => {
  console.log("App started");

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));
});
