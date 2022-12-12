import React from 'react';
import { useState } from 'react';
import Table from './FetchedData';

function Header() {
    const [search, setSearch] = useState('')

    const handleChange = (event) => {
        setSearch(event.target.value)
        console.log(search)
    };

    const handleClick = () => {

    }

    return (
        <>
            <div className='header-text'>
                <h1>Search Your Favorite Character</h1>
                <input 
                value={search}
                type="text" 
                id='input'
                placeholder='Search by Name, Birthdate, Height, Mass, Homeworld, Species'
                onChange={handleChange}
                required
                />
                <button onClick={handleClick}>Run Search</button>
            </div>
            <div>
                <Table />
            </div>
        </>
    )
}

export default Header;

//1: capture value from input field
//2: send that value to SWAPI
//3: return info from SWAPI
//4: display SWAPI info as table