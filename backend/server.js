// require = import
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000
const MONGO_DB_URI = 'mongodb+srv://admin:admin@cluster0.2rqen.mongodb.net/test?retryWrites=true&w=majority';

var testAPIRouter = require("./routes/testAPI");
var UserRouter = require("./routes/Users");
var foodItemRouter = require("./routes/food");
var orderRouter = require("./routes/order");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect(MONGO_DB_URI, 
        { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
        .then(() => console.log("MongoDB database connection established successfully !"))
        .catch((err) => console.log(err));

// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/user", UserRouter);
app.use("/food", foodItemRouter);
app.use("/order", orderRouter);


// checks if the server is established the specified PORT number
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
