import React from 'react'

import Circle from './Circle'
import { joinClasses } from '../../../utils/utils'

import './CircleBar.scss'

export default function CircleBar({ paid, minTarget, totalTarget, modifiers, otherClasses }) {
    const circleCenter = 90

    const calcRoundedPercent = (nominator, denominator) => Math.floor((nominator / denominator) * 100)

    let minPercent = calcRoundedPercent(paid, minTarget)

    minPercent = minPercent > 100 ? 100 : minPercent

    const totalPercent = calcRoundedPercent(paid, totalTarget)

    const totalProgressCircle = new Circle(85)
    const minProgressCircle = new Circle(72)

    totalProgressCircle.calcProgressDashoffset(totalPercent)
    minProgressCircle.calcProgressDashoffset(minPercent)

    return (
        <div className={joinClasses('circle-bar', modifiers, otherClasses)}>
            <svg className="circle-bar__rings">
                <circle
                    className="circle-bar__ring-bg"
                    cx={circleCenter}
                    cy={circleCenter}
                    r={totalProgressCircle.radius} />
                <circle
                    style={{
                        strokeDashoffset: totalProgressCircle.progressDashoffset,
                        strokeDasharray: totalProgressCircle.circumference,
                    }}
                    className="circle-bar__ring-progress circle-bar__ring-progress--total"
                    cx={circleCenter}
                    cy={circleCenter}
                    r={totalProgressCircle.radius} />
                <circle
                    className="circle-bar__ring-bg"
                    cx={circleCenter}
                    cy={circleCenter}
                    r={minProgressCircle.radius} />
                <circle
                    style={{
                        strokeDashoffset: minProgressCircle.progressDashoffset,
                        strokeDasharray: minProgressCircle.circumference,
                    }}
                    className="circle-bar__ring-progress circle-bar__ring-progress--min"
                    cx={circleCenter}
                    cy={circleCenter}
                    r={minProgressCircle.radius} />
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