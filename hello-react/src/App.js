import logo from './logo.svg';
import './App.css';
import CustomerList from './CustomerList'
import {
    Component
} from 'react';

function App() {

    const customers = ['Andrew', 'Carnegie', 'John', 'Mat', 'Natan']

    return (
        <div>
            <h1>App</h1>
            <CustomerList allCustomers={customers} total="4" test="New prop"/>
        </div>
    )
}

// class App extends Component {

//     constructor() {
//         super()
//         console.log("[constructor]")
//     }

//     componentDidMount() {
//         // Called when the component is mounted on the DOM
//         console.log('[componentDidMount]')
//     }

//     componentDidUpdate() {
//         // Called when the property has been changed or when the state is changed
//         console.log('[componentDidUpdate]')
//     }

//     render() {
//         console.log("[render]")
//         return <h1> Hello world </h1>
//     }
// }

export default App;