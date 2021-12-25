const express = require("express");

const logoutRouter = express.Router();

logoutRouter.get("/logout", (req, res) => {
	req.logout();
	req.flash("success_msg", "You are logged out");
	res.redirect("/login");
});
module.exports = logoutRouter;
