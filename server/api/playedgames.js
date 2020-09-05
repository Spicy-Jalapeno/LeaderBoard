const db = require('../db')
const { DatePicker } = require('@material-ui/pickers')
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

router.get('/:name', async (req, res, next) => {
    try {

        let playedGamesSnaps = []
        const playedGames = await db.collection('Games Played').where('name', '==', req.params.name).get()
        playedGames.forEach(game => playedGamesSnaps.push(game.data()))
        res.send(playedGamesSnaps).status(200)
    } catch (err) {

    }
})

router.post('/', async (req, res, next) => {
    try {

        const postResult = await db.collection('Games Played')
            .add({
                name: req.body.name,
                date: new Date(),
                players: req.body.players,
                winners: req.body.winners,
                notes: req.body.notes
            });

        return res.status(200).send(postResult);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

router.put('/:id', (req, res, next) => {
    try {

    } catch (err) {

    }
})

