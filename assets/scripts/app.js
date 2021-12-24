const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".nav-links");
const closingBtn = document.querySelector(".fa-times");
const signUpButton = document.querySelector("#signUp");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

bars.addEventListener("click", () => {
	sidebar.classList.toggle("show-sidebar");
});
closingBtn.addEventListener("click", () => {
	sidebar.classList.remove("show-sidebar");
});

const caretDown = document.querySelector(".fa-caret-down");
const dropdownItems = document.querySelector(".dropdown-menu-items");
caretDown.addEventListener("click", () => {
	dropdownItems.style.display = "flex";
});

signUpButton.addEventListener("click", async () => {
	console.log("clicked");
	const data = {
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: password,
		country: country,
		phone: phone,
	};
	console.log("data", data);
	await fetch("/signup", {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: "follow", // manual, *follow, error
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	});
});
