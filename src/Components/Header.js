import React from 'react';
import { useState } from 'react';
import Table from './FetchedData';


function Header() {
    const [search, setSearch] = useState('')
    const [searching, setSearching] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setSearching(e.target.value)
        
    };

    const runSearch = (e) => {
        e.preventDefault();
        setSearch(searching);
        console.log(search)
        
    }

    return (
        <>
            <div className='header-text'>
                <h1>Star Wars</h1>
                <input 
                value={searching}
                type='text' 
                id='input'
                onChange={handleChange}
                required
                />
                <button type='submit' onClick={runSearch}>Run Search</button>
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
