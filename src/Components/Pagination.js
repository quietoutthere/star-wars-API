import React, { useState } from 'react';
import axios from 'axios';

const Pagination = ({getData}) => {

    const nextKey = async () => {
        
        
    }

    return <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"onClick={nextKey}><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
}

export default Pagination;

//click on Next, page 1 goes to page 2