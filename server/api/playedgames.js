const db = require('../db')
const router = require('express').Router()
module.exports = router


//websitename.com/api/playedgames
router.get('/', async (req, res, next) => {
    try {
        let playedGamesSnaps = []
        const playedGames = await db.collection('Games Played').orderBy('date', "desc").get()
        playedGames.forEach(game => playedGamesSnaps.push(game.data()))
        res.send(playedGamesSnaps).status(200)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', (req, res, next) => {
    try {

    } catch (err) {

    }
})

router.post('/', (req, res, next) => {
    try {

    } catch (err) {

    }
})

router.put('/:id', (req, res, next) => {
    try {

    } catch (err) {

    }
})

