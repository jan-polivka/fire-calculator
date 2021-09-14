import React, { useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'

const CalculatorInputs = (store) => {
    return (
        <div>
            <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField id="age" label="Age" variant="outlined"
                         onChange={e => store.set_age(e.target.value)}/>
                    </Grid>
                    <br/>
                    <Grid item xs={12}>
                        <TextField id="income" label="Income" variant="outlined"
                         onChange={e => store.set_income(e.target.value)}/>
                    </Grid>
                    <br/>
                    <Grid item xs={12}>
                        <TextField id="expenditure" label="Expenditure"
                         variant="outlined" 
                         onChange={e => store.set_expenditure(e.target.value)}/>
                    </Grid>
                    <br/>
                    <Grid item xs={12}>
                        <TextField id="newWorth" label="New Worth" variant="outlined"
                         onChange={e => store.set_net_worth(e.target.value)}/>
                    </Grid>
                </Grid>
        </div>
    );
};

export default CalculatorInputs;