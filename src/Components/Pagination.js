import React from 'react';

const Pagination = ({ nextKey, numberedKey, previousKey, count, prevPageUrl, nextPageUrl}) => {
    const numberButtons = [];
    const numOfPages = count % 10 === 0 ? count / 10 : Math.ceil(count / 10);
    for (let i = 0; i < 9; i++) {
        const isDisabled = i >= numOfPages;
        const conditonalClass = isDisabled ? "page-item disabled" : "page-item ";

        const conditionalFunction = (e) => isDisabled ? null : numberedKey(e);

        numberButtons.push(
            <li className={conditonalClass} onClick={conditionalFunction} key={i}>
                <a className="page-link" href={conditonalClass} tabIndex="-1" aria-disabled="true" id={i + 1}>{i + 1}</a>
            </li>
        )
    }

    return <nav aria-label="..." className="paginationNav">
        <ul className="pagination">
            <li className={prevPageUrl ? "page-item" : "page-item disabled"} onClick={previousKey}><a className="page-link" href={prevPageUrl} tabIndex="-1" aria-disabled="true">Previous</a></li>
            {numberButtons}
            <li className={nextPageUrl ? "page-item" : "page-item disabled"} onClick={nextKey}><a className="page-link" href={nextPageUrl} tabIndex="-1" aria-disabled="true">Next</a></li>
        </ul>
    </nav>
};

export default Pagination;
