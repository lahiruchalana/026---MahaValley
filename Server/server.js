const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 9090;

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB successfully connected!!!");
})

app.listen(PORT, () => {
    console.log(`Server is running on : ${PORT}`)
})

const vegetableRouter = require("./routes/vegetableRoute");

app.use('/api/vegetables', vegetableRouter);
