const QrcodeModel = require("../models/QrcodeModel");
const mongoose = require("mongoose")

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
    console.log(url, name);

    try{
        // generate QR code and short name
        // get IP adress
        const qrcode = await QrcodeModel.create({url, name})
        return  res.status(200).json(qrcode)
    } catch(error){
        return  res.status(400).json({error: error.message})
    }
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
	// crud_index,
	getQrCodes,
    getQrCode,
	createQrCode,
	deleteQrCode,
    updateQrCode
};