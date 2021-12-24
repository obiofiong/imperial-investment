// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: "AIzaSyARL6wT-o5EFVtSRKS59bURxn-20HwUmtI",
// 	authDomain: "imperiuminvestmentmanage-7dc93.firebaseapp.com",
// 	projectId: "imperiuminvestmentmanage-7dc93",
// 	storageBucket: "imperiuminvestmentmanage-7dc93.appspot.com",
// 	messagingSenderId: "1077793865900",
// 	appId: "1:1077793865900:web:8ddc8c4d98e84ef0315f09",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// module.exports = { app };
const { initializeApp } = require("firebase-admin/app");
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});
// const db = admin.database();
// const defaultAuth = getAuth();
// const defaultDatabase = getDatabase();
// module.exports = { defaultAuth, db };
