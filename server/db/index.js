var admin = require('firebase-admin');

<<<<<<< HEAD
var serviceAccount = require("../../serviceAccount.json");
const  firestore  = require("firebase-admin");
=======
// var serviceAccount = require("../../serviceAccount.json");
require('dotenv').config();
>>>>>>> f4f2611ed1c01c9800c17430617e3f2c5fe3f4af

admin.initializeApp({
	credential: admin.credential.cert({
		projectId: process.env.FIREBASE_PROJECT_ID,
		privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
		clientEmail: process.env.FIREBASE_CLIENT_EMAIL
	}),
	databaseURL: process.env.FIREBASE_DATABASE_URL
});

const db = admin.firestore();

module.exports = db;
