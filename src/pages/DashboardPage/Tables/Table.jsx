import React from 'react'

import './Table.scss'

export default function Table() {
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
                <tr className="table__row">
                    <td className="table__cell">
                        <span className="table__date">2020-07-24</span>
                        <span className="table__time">18:21</span>
                    </td>
                    <td className="table__cell">
                        <span className="table__detail-title">Investment in project</span>
                        <div className="table__detail-content">
                            <span className="table__detail-label">Project:</span>
                            <a href="#" className="table__project-id">CRP-1245</a>
                        </div>
                    </td>
                    <td className="table__cell table__cell--amount">
                        <span className="table__amount">55$</span>
                    </td>
                </tr>
                <tr className="table__row">
                    <td className="table__cell">
                        <div className="table__date-container">
                            <span className="table__date">2020-07-24</span>
                            <span className="table__time">18:21</span>
                        </div>
                    </td>
                    <td className="table__cell">
                        <div className="table__details-container">
                            <span className="table__detail-title">Investment in project</span>
                            <div className="table__detail-content">
                                <span className="table__detail-label">Project:</span>
                                <a href="#" className="table__project-id">CRP-1245</a>
                            </div>
                        </div>
                    </td>
                    <td className="table__cell table__cell--amount">
                        <span className="table__amount">55$</span>
                    </td>
                </tr>
            </tbody>
        </ table>
    )
}