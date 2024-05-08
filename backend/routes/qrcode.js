const express = require('express')

const QrcodeModel = require('../models/QrcodeModel');

const router = express.Router()

// Get all QR codes
router.get('/', (req, res) => {
    res.json({msg: 'Get all QR codes!!!'});
})

// Get Single QR codes
router.get('/:id', (req, res) => {
    res.json({msg: 'Get single QR codes!!!'});
})

// Post QR codes
router.post('/', async (req, res) => {
    const {url, name, ip = ''} = req.body;
    console.log(url, name, ip);
    try{
        const qrcode = await QrcodeModel.create({url, name, ip})
        res.status(200).json(qrcode)
    } catch(error){
        res.status(400).json({error: error.message})
    }
    //  res.json({msg: 'Post a new QR codes!!!'});
})

// Delete QR codes
router.delete('/:id', (req, res) => {
    res.json({msg: 'Delete a QR codes!!!'});
})

// update QR codes
router.patch('/:id', (req, res) => {
    res.json({msg: 'Update a QR codes!!!'});
})


module.exports = router