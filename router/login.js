const express = require("express");
const passport = require("passport");

const loginRouter = express.Router();

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
