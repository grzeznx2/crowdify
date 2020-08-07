import React from 'react'

import SvgIcon from '../SvgIcon/SvgIcon'

import { joinClasses } from '../../utils/utils'

import './Pagination.scss'

export default function Pagination({ changePage, resultsCount, resPerPage, page }) {
    const pagesCount = Math.ceil(resultsCount / resPerPage)

    return (
        <div className="pagination">
            <a href="#" className="pagination__button pagination__button--arrow">
                <SvgIcon root="pagination__icon" svgId='icon-chevron-left' />
            </a>
            {
                [...Array(pagesCount)].map((_, i) => {
                    return <button onClick={() => changePage(i + 1)} className={`pagination__button${page === i + 1 ? ' pagination__button--active' : ''}`}>{i + 1}</button>
                })
            }
            <a href="#" className="pagination__button">
                <SvgIcon root="pagination__icon" svgId='icon-chevron-right' />
            </a>
        </div>
    )
}