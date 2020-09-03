import React, { useEffect, } from 'react';
import TextField from '@material-ui/core/TextField';
import { FormGroup, FormControl, Button } from '@material-ui/core';
import Axios from 'axios';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        background: '#D669F0'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,

    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
        fontSize: 'medium'
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
    button: {
        color: '#DC80F9',
        background: '#D669F0',
        color: '#FFF',
        '&:hover': {
            backgroundColor: '#D669F0',
           
        }
    },
}));

const ITEM_HEIGHT = 80;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 350,
        },
    },
};




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
    // String containing input from the notes input field. 
    const [notes, setNotes] = React.useState('');
    //Theme styling. 
    const classes = useStyles();
    const theme = useTheme();
    //Method sets the playersName array for use in the players selection.
    // Also the same array is used in the selection for the winners list.  
    const handlePlayersChange = (event) => {
        console.log(event.target.value);
        setPlayersName(event.target.value);

    };
    // Method sets the winnersName array for use in the winners value
    // Method is also needed for the onChange function in the winners selection. 
    const handleWinnersChange = (event) => {
        console.log(event.target.value);
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
    // Sumbit that will post to the database and reload the window with the new info. 
    const handleSubmit = async (event) => {
        console.log("submitted");
        event.preventDefault();
        const values = {
            name: gamePicked,
            players: playersName,
            winners: winnersName,
            notes: notes
        }

        const result = await Axios.post("/api/playedgames", values);
        //This line reloaded the window(page).
        window.location.reload(false);
    }




    useEffect(() => {
        const fetch = async () => {
            const gamesRes = await Axios.get('/api/games');
            const playersRes = await Axios.get('/api/players');
            let playersName = [];
            let gamesName = [];
            // grabbing the name of the games from the response of the database.
            gamesRes.data.forEach(game => {
                gamesName.push(game.name);
            });
            // setting the local gameName array with the database info. 
            setGames(gamesName);

            // grabbing the first name from the response of the database. 
            playersRes.data.forEach(player => {
                playersName.push(player.firstName);
            });

            // setting the local playersName array with the database info.
            setPlayers(playersName);

        }
        fetch()
    }, [])
    return (
        <form onSubmit={handleSubmit}>
            <FormGroup className={classes.root} >
                <FormControl className={classes.formControl}>
                    <InputLabel id="games">Game</InputLabel>
                    <Select
                        required
                        labelId="game"
                        id="game"
                        placeholder="Game Name"
                        value={gamePicked}
                        onChange={handleGameChange}
                    >
                        {games.map((game) => (
                            <MenuItem key={game} value={game}>{game}</MenuItem>
                        ))}

                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="players">Players</InputLabel>
                    <Select
                        required
                        placeholder="Players"
                        id="players"
                        multiple
                        value={playersName}
                        onChange={handlePlayersChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                                {
                                    selected.map((value) => (
                                        <Chip key={value} label={value} className={classes.chip} />
                                    ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {players.map((name) => (
                            <MenuItem key={name} value={name} style={getStyles(name, playersName, theme)}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="winners">Winner(s)</InputLabel>
                    <Select
                        required
                        placeholder="Winner(s)"
                        id="players"
                        multiple
                        value={winnersName}
                        onChange={handleWinnersChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {playersName.map((name) => (

                            <MenuItem key={name} value={name} style={getStyles(name, winnersName, theme)}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField
                        required
                        id="notes"
                        label="Notes"
                        placeholder="Write notes here"
                        multiline
                        rowsMax={10}
                        spellCheck={true}
                        value={notes}
                        onChange={changeNotes}
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
    );

}
export default GamePlayedForm;
