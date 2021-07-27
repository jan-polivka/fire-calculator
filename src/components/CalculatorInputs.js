import React, { useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'

import { ValuesContext } from './Landing.js';

const CalculatorInputs = () => {
    const values = useContext(ValuesContext)
    return (
        <div>
            <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField id="income" label="Income" variant="outlined"
                         onChange={e => values.set_income(e.target.value)}/>
                    </Grid>
                    <br/>
                    <Grid item xs={12}>
                        <TextField id="expenditure" label="Expenditure"
                         variant="outlined" 
                         onChange={e => values.set_expenditure(e.target.value)}/>
                    </Grid>
                </Grid>
        </div>
    );
};

export default CalculatorInputs;