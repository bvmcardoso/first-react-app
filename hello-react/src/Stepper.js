import { useState, useEffect } from 'react'



function Stepper() {

    const [val, changeCounter] = useState(0)
    
    useEffect(() => {
        if (val > 0) {
            console.log(val);
        }
        
    },[val]);

    const handleIncrement = () => {
        changeCounter(val + 1);
    }

    const handleDecrement = () => {
        changeCounter(val - 1);
    }

    return (
        <div>
            <h3>Stepper</h3>
            <button onClick= {handleDecrement}> - </button>
            &nbsp; {val} &nbsp;
            <button onClick = {handleIncrement} > + < /button>
        </div>
    )
}

export default Stepper