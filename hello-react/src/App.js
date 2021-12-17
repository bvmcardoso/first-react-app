import logo from './logo.svg';
import './App.css';
import {
    Component
} from 'react';

class App extends Component {

    constructor() {
        super()
        console.log("[constructor]")
    }

    componentDidMount() {
        console.log('[componentDidMount]')
    }

    componentDidUpdate() {
        console.log('[componentDidUpdate]')
    }

    render() {
        console.log("[render]")
        return <h1> Hello world </h1>
    }
}


export default App;