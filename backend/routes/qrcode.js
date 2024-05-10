const express = require('express')

const router = express.Router()

const { 
    createQrCode, 
    getQrCodes,
    getQrCode,
    deleteQrCode,
    updateQrCode
} = require('../controllers/QrCodeController');

// Get all QR codes
router.get('/', getQrCodes)

// Get Single QR codes
router.get('/:id', getQrCode)

// Post QR codes
router.post('/', createQrCode)

// Delete QR codes
router.delete('/:id', deleteQrCode)

// update QR codes
router.patch('/:id', updateQrCode)


module.exports = router