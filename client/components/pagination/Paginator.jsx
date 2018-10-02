import React from 'react';
import { NavLink } from 'react-router-dom';
import './Paginator.css';

const Paginator = ({ prePage, currentPage, nextPage, pageSize, totalPages, fetchProductPagination }) => {
    return (
        <section className="pagination">
            <div className="pagination-nav">
                {prePage !== null || prePage >= 1 ? (
                    <NavLink
                        to={`/product/${prePage}/${pageSize}`}
                        onClick={() => fetchProductPagination(prePage, pageSize)}
                    >
                        &lt; Previous page
                    </NavLink>
                ) : null}
                <NavLink
                    to={`/product/${currentPage}/${pageSize}`}
                    activeClassName="active-page"
                    onClick={() => fetchProductPagination(currentPage, pageSize)}
                >
                    {currentPage}
                </NavLink>
                {nextPage !== null && (
                    <NavLink
                        to={`/product/${nextPage}/${pageSize}`}
                        onClick={() => fetchProductPagination(nextPage, pageSize)}
                    >
                        {nextPage}
                    </NavLink>
                )}
                {nextPage !== null && nextPage > 1 && nextPage < totalPages ? (
                    <NavLink
                        to={`/product/${nextPage}/${pageSize}`}
                        onClick={() => fetchProductPagination(nextPage, pageSize)}
                    >
                        Next page &gt;
                    </NavLink>
                ) : null}
            </div>
        </section>
    );
};

export default Paginator;
