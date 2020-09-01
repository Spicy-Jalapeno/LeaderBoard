import React from 'react';
import { Formik, Field, Form } from 'formik';
// import CustomDatePicker from './reusable/CustomDatePicker'
import { Grid, ExpansionPanelDetails } from '@material-ui/core';
import  DateFnsUtils  from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider,  } from '@material-ui/pickers';
import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';
import Axios from 'axios';
const GamePlayedForm = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date().now);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    
    return (
        <div>
        <Grid container direction='column' justify='center' alignItems='center'>
        <Formik
            initialValues={{
                name: '',
                date:new Date(),
                players: [],
                winners: [],
                notes: "",
                


            }}
            onSubmit=  { async (values, actions) => {
                setTimeout(() => {
                     console.log(values)
                    alert(JSON.stringify(values, null, 5));
                    actions.setSubmitting(false);
                }, 1000);
                //post 
                values.players = values.players.split(" ");
                values.winners = values.winners.split(" ");
                console.log(values);
                const result = await Axios.post("/api/playedgames", values);
            }}
        >
                
                    {props => (
                        <Form onSubmit={props.handleSubmit}>
                            <div>
                                < Field id="name" name="name" placeholder="Name" />
                            </div>
                            <div>
                           
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                        utcoffset={0}
                                        dateformat = "MM-DD-YYYY"
                                        value={props.values.date}
                                        // onChange={props.handleChange}
                                     
                                        onChange={date => props.setFieldValue("date", date)}
                                        
                                        animateYearScrolling


                                    />

                                </MuiPickersUtilsProvider>
                                {/* <Field name='date' componenet={CustomDatePicker} /> */}
                            </div>

                            <div> <Field id="players" name="players" placeholder="Insert Players" />
                            </div>
                            <div> <Field id="winners" name="winners" placeholder="Insert Winner(s)" />
                            </div>
                            <div> <Field id="notes" name="notes" placeholder="Notes" />
                            </div>

                            <button type="submit">Submit</button>
                        </Form>)}
        </Formik>
        
        </Grid >
        </div>
    );

}
export default GamePlayedForm;
