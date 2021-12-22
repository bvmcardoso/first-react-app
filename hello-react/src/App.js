import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Stepper from './Stepper'

import { useState } from 'react'

function App() {

    const [user, setUser] = useState({})

    const handleChange = (e) => {
        setUser({
            ...user,   //Spread operator
            [e.target.name]:[e.target.value]
        })
    }

    return (
        <div className="login">
            Username: <input type="text" onChange={ handleChange } name="username"/>
            Password: <input type="password" onChange={ handleChange } name="password" />
            <button>Send</button>
        </div>

    )
}

export default App;