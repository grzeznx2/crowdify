import React from 'react'

import Button from '../Button/Button'
import SvgIcon from '../SvgIcon/SvgIcon'

import './Pagination.scss'

export default function Pagination({ changePage, resultsCount, resPerPage, page }) {
    const pagesCount = Math.ceil(resultsCount / resPerPage)

    return (
        <div className="pagination">
            {
                page !== 1 &&
                <Button root='pagination__button' handleClick={() => changePage(page - 1)}>
                    <SvgIcon root="pagination__icon" svgId='icon-chevron-left' />
                </Button>
            }

            {
                pagesCount > 1 &&
                [...Array(pagesCount)].map((_, i) => {
                    return <button onClick={() => changePage(i + 1)} className={`pagination__button${page === i + 1 ? ' pagination__button--active' : ''}`}>{i + 1}</button>
                })
            }
            {
                page !== pagesCount && pagesCount > 1 &&
                <Button root='pagination__button' handleClick={() => changePage(page + 1)}>
                    <SvgIcon root="pagination__icon" svgId='icon-chevron-right' />
                </Button>
            }

        </div>
    )
}