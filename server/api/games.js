const router = require('express').Router();
const db = require('../db');
module.exports = router;

//websitename.com/api/games
//this route will get all games
router.get('/', async (req, res, next) => {
	try {
		res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
		//this will get all current games in the firestore db

		//store results in an array to send back to user
		let gamesSnaps = [];

		//get collection from db
		const games = await db.collection('Games').get();

		// go through each game and push to games array
		games.forEach((doc) => {
			console.log(doc.data())
			gamesSnaps.push(doc.data());
		});

		//send the games back to user with 200 'OK' status
		res.send(gamesSnaps).status(200);
	} catch (err) {
		next(err);
	}
});

//this route will get game data by id
router.get('/:id', (req, res, next) => {
	try {
	} catch (err) { }
});

//route will add new games to db
router.post('/', (req, res, next) => {
	try {
	} catch (err) { }
});

//route will update game via id
router.put('/:id', (req, res, next) => {
	try {
	} catch (err) { }
});
