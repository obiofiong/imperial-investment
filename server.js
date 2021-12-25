// imports
const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const loginRouter = require("./router/login");
const registerRouter = require("./router/register");
const app = express();
const connectDB = require("./database/config");
const PORT = process.env.PORT || 3300;
const config = require("./firebase/config");
// Static files
app.use(express.static("assets"));
app.use("/css", express.static(process.cwd() + "/assets"));
app.use("/img", express.static(process.cwd() + "/assets/img"));
app.use("/js", express.static(process.cwd() + "/assets/scripts"));

// var express = require("express"),
var mongoose = require("mongoose"),
	passport = require("passport"),
	// bodyParser = require("body-parser"),
	LocalStrategy = require("passport-local"),
	passportLocalMongoose = require("passport-local-mongoose"),
	User = require("./models/user.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
	require("express-session")({
		secret: "Any normal Word", //decode or encode session
		resave: false,
		saveUninitialized: false,
	})
);
// middlewares
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

app.use(passport.initialize());
app.use(passport.session());

// Set view
// app.set("views", "./pages");
app.set("view engine", "ejs");
app.set("views", process.cwd() + "/pages");

// routes
app.get("", (req, res) => {
	res.render("index");
});
app.get("/about", (req, res) => {
	res.render("about-us");
});
app.get("/contact", (req, res) => {
	res.render("contact");
});
app.use("/login", loginRouter);
app.use("/signup", registerRouter);
app.get("/fund-account", (req, res) => {
	res.render("fund-account");
});
app.get("/account-tiers", (req, res) => {
	res.render("account-tiers");
});
app.get("/logout", (req, res) => {
	req.logout();
	res.redirect("/");
});
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
}
app.get("/dashboard", (req, res) => {
	res.render("dashboard");
});
const uri =
	"mongodb+srv://admin:adminadmin@imperiuminvestmentmanag.dzol4.mongodb.net/imperiuminvestementmanagement?retryWrites=true&w=majority";

// listening on port 3000
const start = async () => {
	try {
		// await connectDB(process.env.MONGO_URI);
		await connectDB(uri);
		app.listen(PORT, () => {
			console.log(
				"Imperium Investment management is running on port 3300"
			);
		});
	} catch (err) {
		console.log(err);
	}
};

start();