import React from 'react'
import { Link } from 'react-router-dom'

import { joinClasses } from '../../../../utils/utils'

export default function Row({ transaction }) {
    const { createdAt, type, amount, increaseAccountValue, project, projectName } = transaction
    console.log(transaction)

    const getDateAndTime = ISOString => {
        let [date, time] = ISOString.split('T')
        time = time.slice(0, 5)
        return [date, time]
    }

    const getSignAndModifier = increaseAccountValue => {
        const sign = increaseAccountValue ? '+' : '-'
        const modifier = increaseAccountValue ? 'positive' : 'negative'
        return [sign, modifier]
    }

    const createDetailContent = (project, projectName) => {
        let detailContent = null
        if (project) {
            detailContent =
                <div className="table__detail-content">
                    <span className="table__detail-label">Project:</span>
                    <Link to={`/projects/${project}`} className="table__project-id">
                        {projectName}
                    </Link>
                </div>
        }
        return detailContent
    }

    const [date, time] = getDateAndTime(createdAt)
    const [sign, modifier] = getSignAndModifier(increaseAccountValue)
    const detailContent = createDetailContent(project, projectName)

    return (
        <tr className="table__row">
            <td className="table__cell">
                <span className="table__date">{date}</span>
                <span className="table__time">{time}</span>
            </td>
            <td className="table__cell">
                <span className="table__detail-title">{type}</span>
                {
                    detailContent
                }
            </td>
            <td className="table__cell table__cell--amount">
                <span className={joinClasses("table__amount", modifier)}>{sign}{amount}$</span>
            </td>
        </tr>
    )
}