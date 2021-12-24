const { db } = require("../firebase/config");
const User = require("../models/user");
// const firestore = firebase.firestore;

const register = async (req, res, next) => {
	try {
		const data = req.body;
		const user = await firebase.collection("users").doc().set(data);
		// res.send()
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	register,
};
