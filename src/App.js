import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [value, setValue] = useState('')

    const [list, setList] = useState([])

    const listComponent = list.map( (val, index) => {
        return (
        <li key={index} >{val}</li>
        )
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValue(value)
    }

    const handleClick = event => {
        event.preventDefault();
        setList(list.concat(value))
        setValue('')
    }



    return (
        <form className="App">
            
            <h1>{value}</h1>
            <input type='text' _lpignore='true' name='list' value={value} onChange={handleChange}/>
            <button onClick={handleClick} >Submit</button>
            <ol>
            {listComponent}
            </ol>
        </form>
    );
}

export default App;
