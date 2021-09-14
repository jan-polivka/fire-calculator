import { observer } from 'mobx-react';
import React, { useContext } from 'react';

//import { ValuesContext } from './Landing.js';

const CalculatorOutput = observer((store) => {

    //const values = useContext(ValuesContext)

    //create a function
    //this function doesn't return anything
    //this function "prints" what I need it to do
    //it had a for loop
    //this implies I need a key, a year will do
    // a simple year: networth; <br/>

    return (
        <div>
            {store.finalAmount}
            <br/>
            {store.finalAmounts}
        </div>
    );
});

export default CalculatorOutput;