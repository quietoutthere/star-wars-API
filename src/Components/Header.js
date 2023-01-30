import React from 'react';
import { useState, useEffect } from 'react';
import Table from './FetchedData';

function Header() {
    const [search, setSearch] = useState('')
    const [searching, setSearching] = useState('');
    const [url, setUrl] = useState(`https://swapi.dev/api/people/?search=${search}`);

    const handleChange = (e) => {
        e.preventDefault();
        setSearching(e.target.value)
    };

    const runSearch = (e) => {
        e.preventDefault();
        setSearch(searching);
        setSearching('');
    }

    useEffect(() =>{
        setUrl(`https://swapi.dev/api/people/?search=${search}`)
    }, [search])

    return (
        <>
            <div className='header-text'>
                <h1>Star Wars</h1>
                <input 
                placeholder='Search A Character'
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
                setUrl = {setUrl}
                url = {url}
                setSearch = {setSearch}
                />
            </div>
        </>
    )
}

export default Header;
