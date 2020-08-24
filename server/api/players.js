const router = require('express').Router()
const admin = require('firebase-admin');
const db = require('../db')
module.exports = router


//websitename.com/api/players
router.get('/', async (req, res, next) => {
    try {
        let playerSnaps = []
        const players = await db.collection('Players').get()
        players.forEach(doc => {
            playerSnaps.push(doc.data())
        })
        console.log(playerSnaps)
        res.send(playerSnaps).status(200)
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

