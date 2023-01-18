import React, {useState} from 'react';
import Pagination from './Pagination';
import axios from 'axios';

function PaginationFunctions ({setUrl, url}) {
    const [pageNumber, setPageNumber] = useState(1);
    
    const nextKey = async (e) => {
        e.preventDefault();
        const response = await axios.get(url);
        setUrl(response.data.next)
            if (url === null) {
                response = response
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