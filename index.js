const express = require('express');
const app = express();
const userRoute = require('./api/routes/useRoute');



app.use('/user', userRoute);


module.exports = app;