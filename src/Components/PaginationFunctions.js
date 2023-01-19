import React from 'react';
import Pagination from './Pagination';
import axios from 'axios';

function PaginationFunctions ({setUrl, url}) {
    
    const nextKey = async (e) => {
        e.preventDefault();
        debugger;
        const response = await axios.get(url);
        setUrl(response.data.next);
        if (response.data.next === null) {
            setUrl(response)
        } else {
            setUrl(response.data.next)
        }         
    };
    
    const numberedKey = (e) => {
        e.preventDefault();
        const target = e.target.id       
        setUrl(`https://swapi.dev/api/people/?page=${target}`);
    }

    const previousKey = async (e) => {
        e.preventDefault();
        const response = await axios.get(url);
        setUrl(response.data.previous);
        if (response.data.previous === null) {
            setUrl(response)
        } else {
            setUrl(response.data.previous)
        }
    }

    return (
        <Pagination
        nextKey ={nextKey}
        numberedKey = {numberedKey}
        previousKey = {previousKey}
         />
    );
}

export default PaginationFunctions;