const db = require('../db')
const admin = require('firebase-admin');
const { DatePicker } = require('@material-ui/pickers')
const { getLuminance } = require('@material-ui/core')
const { doc } = require('../db')
const router = require('express').Router()
module.exports = router
const decrement = admin.firestore.FieldValue.increment(-1)

//websitename.com/api/playedgames
router.get('/', async (req, res, next) => {
    try {
        let playedGamesSnaps = []
       

        const playedGames = await db.collection('Games Played').orderBy('date', "desc").get()
        playedGames.forEach(game => {
          
            playedGamesSnaps.push({id:game.id, data:game.data()})
            
        })
       
       
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

//Function will delete the document from the firestore and will decrement the total Losses and totalWins column of each player in that doc.
//Logic to seperate the losers and winner(s) is in the method. 
router.delete('/:id', async(req, res, next) => {
    try {
        let winners;
        let losers;
        const docRef = await db.collection('Games Played').doc(req.params.id).get()
        let data = docRef.data();
        winners = data.winners; 
        losers = data.players; // currently contains the players from the game including the winner(s)   
        // Logic to seperate the winner(s) from the losers
        var i = 1;
        while (losers.length>i) {
            winners.forEach((winner) => {
                if (losers[i] === winner) {
                    losers.splice(i, 1);
                } else {
                    i++;
                }
            })
          
        }
        // grabbing the players collections 
        const playersRef = await db.collection('Players')
       // here the winner(s) array is being forEach to decrement each winner(s) totalWin for the deleted game. 
        winners.forEach(async (winner) => { 
            let winnerQuer = playersRef.where('firstName', '==', winner).get().then(
                (snapshot) => { 
                    snapshot.forEach(doc => { 
                        playersRef.doc(doc.id).update({totalWins: decrement})
                    })
                }
            ); 
            
        
        })
        //Here the losers array is being forEach to decrement their total Losses for the deleted game. 
        losers.forEach(async (loser) => {
            let loserQuer = playersRef.where('firstName', '==', loser).get().then((snapshot) => {
                snapshot.forEach(doc => {
                    playersRef.doc(doc.id).update({ totalLosses: decrement });
                })
            })
        })
        // This line will then delete the whole document that will be deleted from the firestore. 
        await db.collection('Games Played').doc(req.params.id).delete()
        
        
        
       res.status(204).send("Deleted")
        
    } catch (err) {
        return res.status(500).send(err);
    }
})

