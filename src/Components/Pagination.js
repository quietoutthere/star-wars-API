import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pagination = ({getCharacterData, setUrl, url}) => {

    const nextKey = (e) => {
        e.preventDefault();
        setUrl('https://swapi.dev/api/people/?page=2')};
        getCharacterData(url);
        console.log(url);
        

    return <nav aria-label="Page navigation example">
        <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"onClick={nextKey}><a className="page-link" href="#">Next</a></li>
        </ul>
    </nav>
};

export default Pagination;
