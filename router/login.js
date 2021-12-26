const express = require("express");
const passport = require("passport");

const loginRouter = express.Router();
// const User = require("../models/User");
const { forwardAuthenticated } = require("../config/auth");

// Login Page
loginRouter.get("/login", forwardAuthenticated, (req, res) =>
	res.render("login")
);

loginRouter.get("/", async (req, res) => {
	res.render("login");
});
loginRouter.post("/", async (req, res, next) => {
	passport.authenticate("local", {
		successRedirect: "/dashboard",
		failureRedirect: "/login",
		failureFlash: true,
	})(req, res, next);
});

module.exports = loginRouter;
