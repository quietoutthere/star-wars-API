import React, {useState} from 'react';
import Pagination from './Pagination';
import FetchedData from './FetchedData';
import axios from 'axios';
function PaginationFunctions ({setUrl}) {
    const [pageNumber, setPageNumber] = useState(1);
    const [newUrl, setNewUrl] = useState()
    
    const nextKey = (e) => {
        e.preventDefault();
        //setPageNumber(2)
        setUrl('https://swapi.dev/api/people/?page=2');
        
    };

    return (
        <Pagination
        nextKey ={nextKey}
         />
    );
}

export default PaginationFunctions;