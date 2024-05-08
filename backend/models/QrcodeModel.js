const mongoose = require('mongoose')

const Schema = mongoose.Schema

const qrcodeSchema = new Schema({
	name: {
		type: String,
	},
    url: {
		type: String,
		required: [true, "QR Code is required"],
	},	
	ip: {
		type: String
	},
	short_url: {
		type: String
	},
	qr_code: {
		type: String
	}
}, { timestamps: true });

module.exports = mongoose.model('QrcodeModel', qrcodeSchema);