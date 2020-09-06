const db = require('../db')
const { DatePicker } = require('@material-ui/pickers')
const { getLuminance } = require('@material-ui/core')
const router = require('express').Router()
module.exports = router


//websitename.com/api/playedgames
router.get('/', async (req, res, next) => {
    try {
        let playedGamesSnaps = []
       

        const playedGames = await db.collection('Games Played').get()
        playedGames.forEach(game => {
          
            playedGamesSnaps.push({id:game.id, data:game.data()})
            
        })
        console.log(playedGamesSnaps)
       
       
            res.send(playedGamesSnaps).status(200);

    } catch (err) {
        next(err)
    }
})

router.get('/:id', (req, res, next) => {
    try {
        
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
        
        console.log(db);
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

router.delete('/:id', async(req, res, next) => {
    try {
        
        
        const response = await db.collection('Games Played').doc(req.params.id).delete()
        
       res.status(204).send("Deleted")
        
    } catch (err) {
        return res.status(500).send(error);
    }
})

