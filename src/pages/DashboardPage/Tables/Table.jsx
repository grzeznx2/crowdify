import React from 'react'

import './Table.scss'

export default function Table() {
    return (
        <table class="table">
            <thead class="table__head">
                <tr class="table__row">
                    <th class="table__head-cell table__head-cell--date">
                        Date
                        </th>
                    <th class="table__head-cell table__head-cell--details">
                        Details
                        </th>
                    <th class="table__head-cell table__head-cell--amount">
                        Amount
                        </th>
                </tr>
            </thead>
            <tbody class="table__body">
                <tr class="table__row">
                    <td class="table__cell">
                        <span class="table__date">2020-07-24</span>
                        <span class="table__time">18:21</span>
                    </td>
                    <td class="table__cell">
                        <span class="table__detail-title">Investment in project</span>
                        <div class="table__detail-content">
                            <span class="table__detail-label">Project:</span>
                            <a href="#" class="table__project-id">CRP-1245</a>
                        </div>
                    </td>
                    <td class="table__cell table__cell--amount">
                        <span class="table__amount">55$</span>
                    </td>
                </tr>
                <tr class="table__row">
                    <td class="table__cell">
                        <div class="table__date-container">
                            <span class="table__date">2020-07-24</span>
                            <span class="table__time">18:21</span>
                        </div>
                    </td>
                    <td class="table__cell">
                        <div class="table__details-container">
                            <span class="table__detail-title">Investment in project</span>
                            <div class="table__detail-content">
                                <span class="table__detail-label">Project:</span>
                                <a href="#" class="table__project-id">CRP-1245</a>
                            </div>
                        </div>
                    </td>
                    <td class="table__cell table__cell--amount">
                        <span class="table__amount">55$</span>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}