require('dotenv').config()

const express = require('express');
const connection = require("./db");
const qrcodeRoutes = require('./routes/qrcode');

// express app
const app = express();

// database connection
connection();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})
  
// routes 
app.use('/api/qrcodes', qrcodeRoutes)

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT + '!!!');
})


