var admin = require('firebase-admin');

<<<<<<< HEAD
var serviceAccount = require("../../serviceAccount.json");
const  firestore  = require("firebase-admin");
=======
// var serviceAccount = require("../../serviceAccount.json");
require('dotenv').config();
>>>>>>> 21e87e20cbbfafc58c2edca7af6137bf0a698c01

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
