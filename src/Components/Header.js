import React from 'react';
import { useState } from 'react';

function Header() {
    const [search, setSearch] = useState('')

    const handleChange = (event) => {
        setSearch(event.target.value)
        console.log(search)
    };

    const handleClick = () => {

    }

    return (
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
    )
}

export default Header;

