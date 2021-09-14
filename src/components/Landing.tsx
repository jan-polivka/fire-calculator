import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import CalculatorInputs from './CalculatorInputs';
import CalculationValues from './CalculationValues';
import CalculatorOutput from './CalculatorOutput';
import { observer } from 'mobx-react';

const UseStyles = makeStyles({
    appbar: {
        background: '#d1491f'
    },
    root: {
      flexGrow: 1,
      padding: 32
    },
    title: {
        flexGrow: 1
    },
  });


//export const ValuesContext = React.createContext(CalculationValues);
const CalculationStore = new CalculationValues();

const landing = () => {
    
    const classes = UseStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Home
                    </Typography>
                </Toolbar>
            </AppBar>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper elevation={3}>
                        <Typography variant="h3" align="center">
                            Welcome to the Fire Calculator!
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3}>
                        <Typography>
                            I am using this to learn MobX.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper elevation={3}>
                        <CalculatorInputs store={CalculationStore}/>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper elevation={3}>
                        Hello
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper elevation={3}>
                        <CalculatorOutput store={CalculationStore}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default landing;