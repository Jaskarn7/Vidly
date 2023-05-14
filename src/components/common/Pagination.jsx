import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = props => {
    const { itemCount, pageSize, currentPage, onPageChange } = props;

    const pagesCount = Math.ceil(itemCount / pageSize);
    if (pagesCount == 1)
        return null;
    const pages = _.range(1, pagesCount + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map((p) => {
                    return (
                        <li className={p === currentPage ? 'page-item active' : 'page-item'} key={p}>
                            <a className="page-link" style={{ cursor: "pointer" }} onClick={() => onPageChange(p)}>{p}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;