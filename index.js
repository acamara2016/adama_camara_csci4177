const express = require('express');
const mongoose = require("mongoose");
const http = require('http');
const app = express();
const userRoute = require('./api/routes/useRoute');
const port = process.env.PORT || 3000;
const uri = "mongodb+srv://dbUser:I1f7zKkhhhjZjRfh@cluster0.8wh3l.mongodb.net/tutorial7?retryWrites=true&w=majority";

mongoose.connect(uri,{
    useNewUrlParser: true, useUnifiedTopology: true
})

app.use('/user', userRoute);
const server = http.createServer(app);

server.listen(port);

module.exports = app;