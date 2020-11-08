import React, { useEffect, } from 'react';
import { FormGroup, FormControl, Button } from '@material-ui/core';
import Axios from 'axios';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'


const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        borderRadius: '30px',
    },
    root: {
        height: '100%',
        width: '100%',
    },
    formGroup: {
        height: '100%',
        justifyContent: 'space-evenly'
    },
    formControl: {
        width: '95%',// margin: theme.spacing(1),
        minWidth: 120,
        boxShadow: ' 0px 10px 10px rgba(0, 0, 0, 0.10)',
        borderRadius: '30px',
        alignSelf: 'center'
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '20px',
       
    },
    chip: {
        margin:2,
        fontSize: 'large',
        backgroundColor: 'lightblue',
    },
    label: {
        color: 'lightblue',
        marginLeft: '20px',
        transform: 'translate(0px, 14px)', //if Select height changes the 14px must change to center the label
    },
    labelShrink: {
        transform: 'translate(0,-20px) scale(1)',

    },
    labelFocus: {
        color: 'lightgreen !important'
    },
    select: {
        minHeight: '45px', //Change this height for the selects. 
        marginTop: '0px !important',
        maxHeight: '70px',
        marginLeft: '0px'
        
    }, selectMenu: {
        backgroundColor: 'lightblue',
        borderRadius: '30px',
        color:'white'
    }
    , focusSelect: {

        '&:focus': {
            backgroundColor: 'transparent'
        }
    },
    text: {
        minHeight: '40px',
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.10)',
        borderRadius: '30px',
        maxHeight: '90px'
    },
    textArea: {
        marginLeft: '10px',
        padding: '0px 10px 10px 10px ',
        scrollBehavior: 'none',
        '&::placeholder': {
            color: 'lightblue',
            opacity: '100%',

        }
    },
    button: {

        alignSelf: 'center',
        width: '85%',
        boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.10)',
        background: 'lightblue',
        color: '#FFF',
        '&:hover': {
            backgroundColor: 'lightgreen',
        }
    },
}));






function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}




const GamePlayedForm = () => {
    // Arrays  containing response data from GET. 
    const [players, setPlayers] = React.useState([]);
    const [games, setGames] = React.useState([]);
    // String containing game selected. 
    const [gamePicked, setPickedGame] = React.useState('');
    // Arrays containing names of players and winners from selections.
    const [playersName, setPlayersName] = React.useState([]);
    const [winnersName, setWinnersName] = React.useState([]);
    const [playerId, setPlayerId] = React.useState([]);
    // String containing input from the notes input field. 
    const [notes, setNotes] = React.useState('');
    //Theme styling. 
    const classes = useStyles();
    const theme = useTheme();
    //Method sets the playersName array for use in the players selection.
    // Also the same array is used in the selection for the winners list.  
    const handlePlayersChange = (event) => {
        // console.log(event.target.value);
        setPlayersName(event.target.value);

    };
    // Method sets the winnersName array for use in the winners value
    // Method is also needed for the onChange function in the winners selection. 
    const handleWinnersChange = (event) => {
        // console.log(event.target.value);
        setWinnersName(event.target.value);

    };
    // Method sets the notes string for use in the post. 
    const changeNotes = (event) => {
        setNotes(event.target.value);
    }

    // Method sets the game string for GamePicked. 
    const handleGameChange = (event) => {

        setPickedGame(event.target.value);
    }

    

    // Submit that will post to the database and reload the window with the new info. 
    const handleSubmit = async (event) => {

        const values = {
            name: gamePicked,
            players: playersName,
            winners: winnersName,
            notes: notes,
            // winnersID: winners,
            // losersID: losers
        }
        // console.log(values.winners.length)
        //posting to the database.
         
       
        

        let indivPlayer = [];
        let losers = values.players;
        let winners = values.winners;

        
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
        
        // console.log("losers")
        // console.log(losers)
        // console.log('Winners')
        // console.log(winners)
        
        await Promise.all([Axios.put(`/api/players/`, {winners: winners, losers: losers}), Axios.post("/api/playedgames", values)])
           
    }




    useEffect(() => {
        const fetch = async () => {
            const gamesRes = await Axios.get('/api/games');
            const playersRes = await Axios.get('/api/players');
            let playersName = [];
            let gamesName = [];
            let playerId = [];
            // grabbing the name of the games from the response of the database.
            gamesRes.data.forEach(game => {
                gamesName.push(game.name);
            });
            // setting the local gameName array with the database info. 
            setGames(gamesName);

            // grabbing the first name from the response of the database. 
            playersRes.data.forEach(player => {
                // console.log(player.data)
                playersName.push(player.data.firstName);
                playerId.push({id:player.id, firstName: player.data.firstName})
            });
            console.log(playerId);
            setPlayerId(playerId)
            // setting the local playersName array with the database info.
            setPlayers(playersName);

        }
        fetch()
    }, [])
    return (
        <Card className={classes.card}>
            <form className={classes.root} onSubmit={handleSubmit}>
                <FormGroup className={classes.formGroup} >

                    <FormControl className={classes.formControl}  >
                        <InputLabel id="games" className={classes.label} classes={{ shrink: classes.labelShrink, focused: classes.labelFocus }}>Games</InputLabel>
                        <Select
                            // classes={{ root: classes.select }}
                            className={classes.select}
                            classes={{ root: classes.focusSelect }}
                            MenuProps={{ classes: { paper: classes.selectMenu } }}
                            required
                            labelId="game"
                            id="game"
                            placeholder="Game Name"
                            value={gamePicked}
                            onChange={handleGameChange}
                            disableUnderline
                            renderValue={(selected) => (
                                <div className={classes.chips}>
                                    {
                                        <Chip key={selected} label={selected} className={classes.chip} />
                                    }
                                </div>
                            )}
                        >
                            {games.map((game) => (
                                <MenuItem key={game} value={game}>{game}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl} >
                        <InputLabel id="players" className={classes.label} classes={{ shrink: classes.labelShrink, focused: classes.labelFocus }}>Players</InputLabel>
                        <Select
                            className={classes.select}
                            classes={{ root: classes.focusSelect, paper:classes.selectMenu }}
                            MenuProps={{ classes: { paper: classes.selectMenu } }}
                            required
                            placeholder="Players"
                            id="players"
                            multiple
                            value={playersName}
                            onChange={handlePlayersChange}
                            disableUnderline
                            input={<Input id="select-multiple-chip" />}
                            renderValue={(selected) => (
                                <div className={classes.chips}>
                                    {
                                        selected.map((value) => (
                                            <Chip key={value} label={value} className={classes.chip} />
                                        ))}
                                </div>
                            )}
                          
                        >
                            {players.map((name) => (
                                <MenuItem key={name} value={name} style={getStyles(name, playersName, theme)}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="winners" className={classes.label} classes={{ shrink: classes.labelShrink, focused: classes.labelFocus }}>Winner(s)</InputLabel>
                        <Select
                            className={classes.select}
                            classes={{ root: classes.focusSelect }}
                            MenuProps={{ classes: { paper: classes.selectMenu } }}
                            required
                            placeholder="Winner(s)"
                            id="players"
                            multiple
                            value={winnersName}
                            onChange={handleWinnersChange}
                            disableUnderline
                            input={<Input id="select-multiple-chip" />}
                            renderValue={(selected) => (
                                <div className={classes.chips}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} className={classes.chip} />
                                    ))}
                                </div>
                            )}
                          
                        >
                            {playersName.map((name) => (

                                <MenuItem key={name} value={name} style={getStyles(name, winnersName, theme)}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputBase
                            className={classes.text}
                            // required
                            id="notes"
                            label="Notes"
                            placeholder="Write notes here"
                            multiline
                            rowsMax={3}
                            spellCheck={true}
                            value={notes}
                            onChange={changeNotes}
                            inputProps={{ className: classes.textArea, maxLength: 120 }}

                        />
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        className={classes.button}
                    >
                        Create Game
                    </Button>
                </FormGroup>
            </form>
        </Card>

    );

}
export default GamePlayedForm;
