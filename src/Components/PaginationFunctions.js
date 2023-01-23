import React from 'react';
import Pagination from './Pagination';
import axios from 'axios';


function PaginationFunctions ({setUrl, url, count}) {

    const nextKey = async (e) => {
        e.preventDefault();
        const response = await axios.get(url);
        const next = response.data.next
        setUrl(next);
        if (response.data.next === null) {
            setUrl(response)
        } else {
            setUrl(next)
        }         
    };
    
    const numberedKey = (e) => {
        e.preventDefault();
        console.log(count)
        const target = e.target.id       
        setUrl(`https://swapi.dev/api/people/?page=${target}`);
    }

    const previousKey = async (e) => {
        e.preventDefault();
        const response = await axios.get(url);
        const previous = response.data.previous
        setUrl(previous);
        if (response.data.previous === null) {
            setUrl(response)
        } else {
            setUrl(previous)
        }
    }

    return (
        <Pagination
        nextKey ={nextKey}
        numberedKey = {numberedKey}
        previousKey = {previousKey}
        count = {count}
        url = {url}
        />
    );
}

export default PaginationFunctions;