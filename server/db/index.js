var admin = require("firebase-admin");

var serviceAccount = require("../../serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://leaderboard-24aa4.firebaseio.com"
});

const db = admin.firestore();

module.exports = db