import React from 'react';
import { useState } from 'react';
import Table from './FetchedData';

function Header() {
    const [search, setSearch] = useState('')

    const handleChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value)
        console.log(search)
    };

    return (
        <>
            <div className='header-text'>
                <h1>Star Wars</h1>
                <input 
                value={search}
                type="text" 
                id='input'
                onChange={handleChange}
                required
                />
                <button onClick={handleChange}>Run Search</button>
            </div>
            <div>
                <Table 
                search={search}
                />
            </div>
        </>
    )
}

export default Header;

//1: capture value from input field
//2: send that value to SWAPI
//3: return info from SWAPI
//4: display SWAPI info as table