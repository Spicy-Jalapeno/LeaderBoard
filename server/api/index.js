const router = require('express').Router()
module.exports = router


router.use('/players', require('./players'))
router.use('/games', require('./games'))
router.use('/playedgames', require('./playedgames'))