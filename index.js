const express = require('express');
const app = express();
const mongoose = require("mongoose");
const userRoute = require('./api/routes/useRoute');
const uri = "mongodb+srv://dbUser:I1f7zKkhhhjZjRfh@cluster0.8wh3l.mongodb.net/tutorial7?retryWrites=true&w=majority";
mongoose.connect(uri,{
    useNewUrlParser: true, useUnifiedTopology: true
})
app.use('/user', userRoute);


module.exports = app;