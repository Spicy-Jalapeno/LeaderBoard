const router = require('express').Router()
const admin = require('firebase-admin');
const db = require('../db')
module.exports = router


//websitename.com/api/games
//this route will get all games
router.get('/', async (req, res, next) => {
    
    try {
        let gameSnaps = []
        const games = await db.collection('Games').get()
        games.forEach(doc => {
            gameSnaps.push(doc.data())
        })
        console.log(gameSnaps)
        res.send(gameSnaps).status(200)
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

