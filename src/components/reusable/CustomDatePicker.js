import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider,  } from '@material-ui/pickers';
import DateFnsUtils  from '@date-io/date-fns';


function CustomDatePicker(props) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }


    return (
        
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
                 value={selectedDate}
                onChange={handleDateChange}
                animateYearScrolling
            
            
            />

        </MuiPickersUtilsProvider>
    );


}


export default CustomDatePicker;
