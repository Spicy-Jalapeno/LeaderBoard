const router = require('express').Router()
module.exports = router


//websitename.com/api/games
//this route will get all games
router.get('/', async (req, res, next) => {
    try {

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

