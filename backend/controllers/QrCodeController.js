const QrcodeModel = require("../models/QrcodeModel");
const mongoose = require("mongoose")
const ipLib = require('ip');
const short = require('shortid');
const QRCode = require('qrcode');

// Get All QR codes
const getQrCodes = async (req, res) => {
    const qrcodes = await QrcodeModel.find({}).sort({createdAt: -1})

    res.status(200).json(qrcodes)
}

// Get Single Qr codes
const getQrCode = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Id is not valid'})
    }

    const qrcode = await QrcodeModel.findById(id)
    if (!qrcode) {
        return res.status(400).json({error: 'No such QR code'})
    }
    res.status(200).json(qrcode)
    
}

// create QR code
const createQrCode = async (req, res) => {
    const {url, name} = req.body;

    QRCode.toDataURL(url, function (err, qr_code) {
        if (err) throw err;        
        try {
            // Get IP and short name
            var ip = ipLib.address();
            var short_url = short();

            const qrcodeRes = QrcodeModel.create({url, name, ip, short_url, qr_code})            
            qrcodeRes.then(function(result) {                
                return  res.status(200).json(result)
             })
        } catch(error){
            return  res.status(400).json({error: error.message})
        }
    })
    
}

// Delete QR code
const deleteQrCode = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Id is not valid'})
    }

    const qrcode = await QrcodeModel.findOneAndDelete({_id: id})
    if (!qrcode) {
        return res.status(400).json({error: 'No such QR code'})
    }
    res.status(200).json(qrcode)
}

// Update QR code
const updateQrCode = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Id is not valid'})
    }

    const qrcode = await QrcodeModel.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!qrcode) {
        return res.status(400).json({error: 'No such QR code'})
    }
    res.status(200).json(qrcode)
}

module.exports = {
	getQrCodes,
    getQrCode,
	createQrCode,
	deleteQrCode,
    updateQrCode
};