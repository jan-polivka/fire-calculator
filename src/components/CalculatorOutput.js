import { observer } from 'mobx-react';
import React, { useContext } from 'react';

import { ValuesContext } from './Landing.js';

const CalculatorOutput = observer(() => {

    const values = useContext(ValuesContext)

    return (
        <div>
            {values.difference}
        </div>
    );
});

export default CalculatorOutput;