require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
	const connection = mongoose
		.connect(process.env.MONGO_URI)
		.then((result) => console.log("Connected to database"))
		.catch((err) => console.log("could not connect to database"));
};

//connect to db
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         // listen for requests
//         app.listen(process.env.PORT, () => {
//             console.log('Connected to database and Listening to port ' + process.env.PORT + '!!!');
//         })
//     })
//     .catch((error) => {
//         console.log(error)
//     })
