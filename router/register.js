const express = require("express");
const bcrypt = require("bcryptjs");
// const { register } = require("../controllers/auth");
// const bodyParser = require("body-parser");
// const { check, validationResult } = require("express-validator");
// const mongoose = require("mongoose")
const passport = require("passport");
const User = require("../models/user.js");
// const urlencodedParser = bodyParser.urlencoded({ encoded: false });
const registerRouter = express.Router();

registerRouter.get("/", async (req, res) => {
	res.render("open-account");
});
// registerRouter.post(
// 	"/",
// 	urlencodedParser,
// 	[
// 		check("email", "Email is not valid")
// 			.exists()
// 			.isEmail()
// 			.isLength({ min: 3 }),
// 	],
// 	async (req, res) => {
// 		console.log(req.body);
// 		const errors = validationResult(req);
// 		console.log("erro", errors);
// 		if (errors.isEmpty()) {
// 			const alert = errors.array();
// 			res.render("open-account", { alert });
// 			// return res.status(422).json(erros.array());
// 		} else {
// 			res.render("dashboard");
// 		}
// 	}
// );
registerRouter.post("/", async (req, res) => {
	console.log(req.body);
	// res.redirect("/login");
	let errors = [];
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;
	const password = req.body.password;
	const confirmPassword = req.body.confirmPassword;
	const country = req.body.country;
	const phone = req.body.phone;
	const data = {
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: password,
		country: country,
		phone: phone,
	};
	if (!firstName || !email || !password || !phone || !confirmPassword) {
		errors.push({ msg: "Please fill in all fields" });
	}
	if (password !== confirmPassword) {
		errors.push({ msg: "Passwords don't match" });
	}
	if (password.length < 6) {
		errors.push({ msg: "Password should be at least 6 characters" });
	}

	if (errors.length) {
		console.log(errors);
		res.render("open-account", {
			errors,
			...req.body,
		});
	} else {
		User.findOne({ email }).then((user) => {
			if (user) {
				errors.push({ msg: "Email is already registered" });
				res.render("open-account", {
					errors,
					...req.body,
				});
			} else {
				const newUser = new User(data);
				console.log(newUser);
				bcrypt.genSalt(10, (err, salt) =>
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) {
							throw err;
						}
						newUser.password = hash;
						newUser
							.save()
							.then((user) => {
								res.redirect("/login");
							})
							.catch((err) => console.log(err));
					})
				);
			}
		});
	}
	// res.redirect("/login");
	// passport.use(new LocalStrategy(User.authenticate()));
	// User.register(new User(data), password, function (err, user) {
	// 	if (err) {
	// 		console.log(err);
	// 		res.render("open-account");
	// 	}
	// 	passport.authenticate("local")(req, res, function () {
	// 		console.log();
	// 		res.render("dashboard");
	// 	});
	// });
});

module.exports = registerRouter;
