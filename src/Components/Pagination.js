import React from 'react';
import PaginationFunctions from './PaginationFunctions';

const Pagination = ({nextKey}) => {

    return <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item" onClick={nextKey}><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>
};

export default Pagination;
