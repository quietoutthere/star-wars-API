import React, { useState } from 'react';



const Pagination = (props) => {
    return <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"onClick={"https://swapi.dev/api/people/?page=2"}><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
}

export default Pagination;

//click on Next, page 1 goes to page 2