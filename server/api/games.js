const router = require('express').Router()
<<<<<<< HEAD
const admin = require('firebase-admin');
=======
>>>>>>> 0b95dfe6513d651a4c8612e7eb2e8df0e19ee031
const db = require('../db')
module.exports = router


//websitename.com/api/games
//this route will get all games
router.get('/', async (req, res, next) => {

    try {
        //this will get all current games in the firestore db

        //store results in an array to send back to user
        let gamesSnaps = []

        //get collection from db
        const games = await db.collection('Games').get()

        // go through each game and push to games array
        games.forEach(doc => {
            gamesSnaps.push(doc.data())
        })

        //send the games back to user with 200 'OK' status
        res.send(gamesSnaps).status(200)
    } catch (err) {
        next(err)
    }


})

//this route will get game data by id
router.get('/:id', (req, res, next) => {
    try {

    } catch (err) {

    }
})

//route will add new games to db
router.post('/', (req, res, next) => {
    try {

    } catch (err) {

    }
})

//route will update game via id
router.put('/:id', (req, res, next) => {
    try {

    } catch (err) {

    }
})

