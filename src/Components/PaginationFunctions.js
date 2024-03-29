import React from 'react';
import Pagination from './Pagination';

function PaginationFunctions ({url, count, prevPageUrl, nextPageUrl, search, setUrl}) {

    const nextKey =  (e) => {
        e.preventDefault();
        if (!nextPageUrl) return;
        setUrl(nextPageUrl);
    };
    
    const numberedKey = (e) => {
        e.preventDefault();
        const target = e.target.id       
        setUrl(`https://swapi.dev/api/people/?search=${search}&page=${target}`);
    }

    const previousKey = (e) => {
        e.preventDefault();
        if (!prevPageUrl) return;
        setUrl(prevPageUrl);
    }

    return (
        <Pagination
        nextKey ={nextKey}
        numberedKey = {numberedKey}
        previousKey = {previousKey}
        nextPageUrl = {nextPageUrl}
        prevPageUrl = {prevPageUrl}
        count = {count}
        url = {url}
        />
    );
}

export default PaginationFunctions;