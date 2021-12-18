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
        // Called when the component is mounted on the DOM
        console.log('[componentDidMount]')
    }

    componentDidUpdate() {
        // Called when the property has been changed or when the state is changed
        console.log('[componentDidUpdate]')
    }

    render() {
        console.log("[render]")
        return <h1> Hello world </h1>
    }
}




export default App;