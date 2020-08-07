import React, { useRef } from 'react'

import './Pagination.scss'

export default function Pagination({ changePage, resultsCount, resPerPage, page }) {
    const pagesCount = Math.ceil(resultsCount / resPerPage)

    return (
        <div className="pagination">
            <a href="#" className="pagination__button pagination__button--arrow">
                <svg className="pagination__icon">
                    <use xlinkHref='/img/sprite.svg#icon-chevron-left' />
                </svg>
            </a>
            {
                [...Array(pagesCount)].map((_, i) => {
                    return <button onClick={() => changePage(i + 1)} className={`pagination__button${page === i + 1 ? ' pagination__button--active' : ''}`}>{i + 1}</button>
                })
            }
            <a href="#" className="pagination__button">
                <svg className="pagination__icon">
                    <use xlinkHref='/img/sprite.svg#icon-chevron-right' />
                </svg>
            </a>
        </div>
    )
}