import React from 'react'

import './CircleBar.scss'

export default function CircleBar({ paid, minTarget, totalTarget }) {
    const calcRoundedPercent = (nominator, denominator) => Math.floor((nominator / denominator) * 100)
    let minPercent = calcRoundedPercent(paid, minTarget)
    minPercent = minPercent > 100 ? 100 : minPercent
    const totalPercent = calcRoundedPercent(paid, totalTarget)

    return (
        <div class="circle-bar">
            <svg class="circle-bar__rings">
                <circle class="circle-bar__ring-bg" cx='90' cy='90' r='85' />
                <circle class="circle-bar__ring-progress circle-bar__ring-progress--total" cx='90'
                    cy='90' r='85' />
                <circle class="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                <circle class="circle-bar__ring-progress circle-bar__ring-progress--min" cx='90'
                    cy='90' r='72' />
            </svg>
            <div class="circle-bar__percent-box">
                <span class="circle-bar__percent">{minPercent}%</span>
                <span class="circle-bar__label"> of {minTarget}€ min</span>
                <span class="circle-bar__percent">{totalPercent}%</span>
                <span class="circle-bar__label"> of {totalTarget}€ total</span>
            </div>
        </div>
    )
}