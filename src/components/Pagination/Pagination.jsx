import React from 'react'

import './Pagination.scss'

export default function Pagination() {
    return (
        <div className="pagination">
            <a href="#" className="pagination__button pagination__button--arrow">
                <svg className="pagination__icon">
                    <use xlinkHref='/img/sprite.svg#icon-chevron-left' />
                </svg>
            </a>
            <a href="#" className="pagination__button">1</a>
            <a href="#" className="pagination__button">2</a>
            <a href="#" className="pagination__button">3</a>
            <a href="#" className="pagination__button">4</a>
            <a href="#" className="pagination__button">5</a>
            <a href="#" className="pagination__button">6</a>
            <a href="#" className="pagination__button">7</a>
            <a href="#" className="pagination__button">8</a>
            <a href="#" className="pagination__button pagination__button--active">9</a>
            <a href="#" className="pagination__button">10</a>
            <a href="#" className="pagination__button">
                <svg className="pagination__icon">
                    <use xlinkHref='/img/sprite.svg#icon-chevron-right' />
                </svg>
            </a>
        </div>
    )
}