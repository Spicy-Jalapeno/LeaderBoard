const router = require('express').Router()
const admin = require('firebase-admin');
const db = require('../db')
const increment = admin.firestore.FieldValue.increment(1)
module.exports = router



//websitename.com/api/players
router.get('/', async (req, res, next) => {
    try {
        let playerSnaps = []
        const players = await db.collection('Players').get()
        players.forEach(doc => {
            playerSnaps.push({ id: doc.id, data: doc.data() })
        })
        // console.log(playerSnaps)
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

// router.put('/winners/:id',async (req, res, next) => {
//     try {
//         console.log(req.params.id);

//         const response = await db.collection('Players').doc(req.params.id).update({ totalWins: increment })
//         // console.log(response);
//     } catch (err) {

//     }
// })

// router.put('/losers/:id',async (req, res, next) => {
//     try {
//         console.log(req.params.id);
//         const response = await db.collection('Players').doc(req.params.id).update({ totalLosses: increment })
//         // console.log(response);
//     } catch (err) {

//     }



// })

router.put('/', async (req, res, next) => {
    try {
        console.log("here in players")
        //Increment is a firebase function use to increment fields by whatever number you pass through. 
        let winners = req.body.winners;
        let losers = req.body.losers; 
        // Getting the players collection
        const playersRef = db.collection('Players')
  
        //Querying the players collection for firstName fields that contain the winner(s) name 
        // Then for each winner their totalWins is increment.
        winners.forEach(async (winner) => { 
            let winnerQuer = playersRef.where('firstName', '==', winner).get().then(
                (snapshot) => { 
                    snapshot.forEach(doc => { 
                        playersRef.doc(doc.id).update({totalWins: increment})
                        console.log(playersRef)
                    })
                }
            ); 
        })
        // Querying the losers array through the collection of players and increment their totalLosses forEach loser. 
        losers.forEach(async (loser) => {
            let loserQuer = playersRef.where('firstName', '==', loser).get().then((snapshot) => {
                snapshot.forEach(doc => {
                    playersRef.doc(doc.id).update({ totalLosses: increment });
                })
            })
        })
      
    } catch (err) {
        console.log(err)
    }
})
