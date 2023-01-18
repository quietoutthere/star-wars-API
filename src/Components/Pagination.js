import React from 'react';

const Pagination = ({nextKey, numberedKey, previousKey}) => {

    return <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item" onClick={previousKey}><a className="page-link" href="#">Previous</a></li>
                <li className="page-item" onClick={numberedKey}><a className="page-link" href="#" id='1'>1</a></li>
                <li className="page-item" onClick={numberedKey}><a className="page-link" href="#" id='2'>2</a></li>
                <li className="page-item" onClick={numberedKey}><a className="page-link" href="#" id='3'>3</a></li>
                <li className="page-item" onClick={numberedKey}><a className="page-link" href="#" id='4'>4</a></li>
                <li className="page-item" onClick={numberedKey}><a className="page-link" href="#" id='5'>5</a></li>
                <li className="page-item" onClick={numberedKey}><a className="page-link" href="#" id='6'>6</a></li>
                <li className="page-item" onClick={numberedKey}><a className="page-link" href="#" id='7'>7</a></li>
                <li className="page-item" onClick={numberedKey}><a className="page-link" href="#" id='8'>8</a></li>
                <li className="page-item" onClick={numberedKey}><a className="page-link" href="#" id='9'>9</a></li>
                <li className="page-item" onClick={nextKey}><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>
};

export default Pagination;
