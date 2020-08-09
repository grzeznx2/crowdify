import React from 'react'

import { joinClasses } from '../../../utils/utils'

import './CircleBar.scss'

export default function CircleBar({ paid, minTarget, totalTarget, modifiers, otherClasses }) {
    const calcRoundedPercent = (nominator, denominator) => Math.floor((nominator / denominator) * 100)
    let minPercent = calcRoundedPercent(paid, minTarget)
    minPercent = minPercent > 100 ? 100 : minPercent
    const totalPercent = calcRoundedPercent(paid, totalTarget)

    return (
        <div className={joinClasses('circle-bar', modifiers, otherClasses)}>
            <svg className="circle-bar__rings">
                <circle className="circle-bar__ring-bg" cx='90' cy='90' r='85' />
                <circle className="circle-bar__ring-progress circle-bar__ring-progress--total" cx='90'
                    cy='90' r='85' />
                <circle className="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                <circle className="circle-bar__ring-progress circle-bar__ring-progress--min" cx='90'
                    cy='90' r='72' />
            </svg>
            <div className="circle-bar__percent-box">
                <span className="circle-bar__percent">{minPercent}%</span>
                <span className="circle-bar__label"> of {minTarget}€ min</span>
                <span className="circle-bar__percent">{totalPercent}%</span>
                <span className="circle-bar__label"> of {totalTarget}€ total</span>
            </div>
        </div>
    )
}