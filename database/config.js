// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
// const uri =
// 	"mongodb+srv://admin:<password>@imperiuminvestmentmanag.dzol4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });
// client.connect((err) => {
// 	const collection = client.db("test").collection("devices");
// 	// perform actions on the collection object
// 	client.close();
// });

const connectDB = (url) => {
	return mongoose.connect(url);
};

module.exports = connectDB;
