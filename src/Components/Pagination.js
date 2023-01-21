import React from 'react';

const Pagination = ({ nextKey, numberedKey, previousKey, count, url }) => {
    const numberButtons = [];
    for (let i = 0; i < 9; i++) {
        const isDisabled = count < ((i + 1) * 10) + 1;

        const conditonalClass = isDisabled ? "page-item disabled" : "page-item ";

        const conditionalFunction = (e) => isDisabled ? null : numberedKey(e);

        numberButtons.push(
            <li className={conditonalClass} onClick={conditionalFunction}>
                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true" id={i + 1}>{i + 1}</a>
            </li>
        )
    }

    return <nav aria-label="...">
        <ul className="pagination">
            <li className={url = 'https://swapi.dev/api/people/?page=1' ? "page-item disabled" : "page-item"} onClick={() => previousKey}><a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a></li>
            {numberButtons}
            <li className={url = 'https://swapi.dev/api/people/?page=9' || count < 11 ? "page-item disabled" : "page-item"} onClick={nextKey}><a className="page-link" href="#">Next</a></li>
        </ul>
    </nav>
};

export default Pagination;
