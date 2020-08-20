import React from 'react'

import Row from './Row/Row'

import './Table.scss'

export default function Table({ transactions }) {
    return (
        < table className="table" >
            <thead className="table__head">
                <tr className="table__row">
                    <th className="table__head-cell table__head-cell--date">
                        Date
                        </th>
                    <th className="table__head-cell table__head-cell--details">
                        Details
                        </th>
                    <th className="table__head-cell table__head-cell--amount">
                        Amount
                        </th>
                </tr>
            </thead>
            <tbody className="table__body">
                {
                    transactions.map(transaction => <Row transaction={transaction} />)
                }
            </tbody>
        </ table>
    )
}