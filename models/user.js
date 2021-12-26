// class User {
// 	constructor(firstName, lastName, email, country, phoneNumber, password) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.email = email;
// 		this.country = country;
// 		this.phoneNumber = phoneNumber;
// 		this.password = password;
// 	}
// }

// const mongoose = require("../database");

// create an schema
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	password: String,
	email: {
		type: String,
		index: true,
		unique: true,
	},
	country: String,
	phone: String,
	createdAt: {
		type: Date,
		default: Date.now,
	},
});
UserSchema.plugin(passportLocalMongoose);
// UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("User", UserSchema);
