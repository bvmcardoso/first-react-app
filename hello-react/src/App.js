import logo from './logo.svg';
import './App.css';
import {
    Component
} from 'react';

import Counter from './Counter.js'

class App extends Component {

    render() {
        return (
            <div>
            <h1>Hello world</h1>
                <Counter />
            </div>
        )
    }
}

export default App