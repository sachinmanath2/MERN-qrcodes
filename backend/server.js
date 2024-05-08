require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const qrcodeRoutes = require('./routes/qrcode');

// express app
const app = express();

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

// routes 
app.use('/api/qrcodes', qrcodeRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to database and Listening to port ' + process.env.PORT + '!!!');
        })
    })
    .catch((error) => {
        console.log(error)
    })


