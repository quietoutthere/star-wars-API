import React from 'react';
import ReactDOM from 'react-dom';

function Header() {
    return (
        <div className='header-text'>
            <h1>Search Your Favorite Character</h1>
            <input type="text" placeholder='Search by Name, Birthdate, Height, Mass, Homeworld, Species'/>
            <button>Run Search</button>
        </div>
    )
}

export default Header;

