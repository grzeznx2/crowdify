import React, { useEffect } from 'react'

export default function Investments({ changeTitle }) {

    useEffect(() => {
        changeTitle()
    }, [])

    return (
        <>
            <div class="overview__project">
                <div class="project project--no-gutters">
                    <div class="project__top-container">
                        <div class="project__image-box">
                        </div>
                        <div class="project__title-box">
                            <h3 class="heading-4 text-white">
                                Modern, high quality detached house project
                        </h3>
                        </div>
                    </div>
                    <div class="project__middle-container">

                        <div class="project__details-box">
                            <div class="project-details">
                                <ul class="project-details__list">
                                    <li class="project-details__item">
                                        <span class="project-details__label">interest rate:</span>
                                        <span class="project-details__value">25%</span>
                                    </li>
                                    <li class="project-details__item">
                                        <span class="project-details__label">type:</span>
                                        <span class="project-details__value">Entertainment</span>
                                    </li>
                                    <li class="project-details__item">
                                        <span class="project-details__label">period:</span>
                                        <span class="project-details__value">6 months</span>
                                    </li>
                                    <li class="project-details__item">
                                        <span class="project-details__label">location:</span>
                                        <span class="project-details__value">Riga</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="project__target-box">
                            <div class="target">
                                <div class="circle-bar">
                                    <svg class="circle-bar__rings">
                                        <circle class="circle-bar__ring-bg" cx='90' cy='90' r='85' />
                                        <circle class="circle-bar__ring-progress circle-bar__ring-progress--total"
                                            cx='90' cy='90' r='85' />
                                        <circle class="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                                        <circle class="circle-bar__ring-progress circle-bar__ring-progress--min"
                                            cx='90' cy='90' r='72' />
                                    </svg>
                                    <div class="circle-bar__percent-box">
                                        <span class="circle-bar__percent">14%</span>
                                        <span class="circle-bar__label"> of 50.000€ min</span>
                                        <span class="circle-bar__percent">32%</span>
                                        <span class="circle-bar__label"> of 128.500€ total</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project__bottom-container project__bottom-container--my-investments">
                        <a href="#" class="button button--primary">Invest</a>
                        <a href="#" class="button button--success">My Ivestments</a>
                        <a href="#" class="button button--info">View Project</a>
                        <a href="#" class="button button--warning">Withdraw</a>
                    </div>
                </div>
            </div>
            <div class="overview__project">
                <div class="project project--no-gutters">
                    <div class="project__top-container">
                        <div class="project__image-box">
                        </div>
                        <div class="project__title-box">
                            <h3 class="heading-4 text-white">
                                Modern, high quality detached house project
                        </h3>
                        </div>
                    </div>
                    <div class="project__middle-container">

                        <div class="project__details-box">
                            <div class="project-details">
                                <ul class="project-details__list">
                                    <li class="project-details__item">
                                        <span class="project-details__label">interest rate:</span>
                                        <span class="project-details__value">25%</span>
                                    </li>
                                    <li class="project-details__item">
                                        <span class="project-details__label">type:</span>
                                        <span class="project-details__value">Entertainment</span>
                                    </li>
                                    <li class="project-details__item">
                                        <span class="project-details__label">period:</span>
                                        <span class="project-details__value">6 months</span>
                                    </li>
                                    <li class="project-details__item">
                                        <span class="project-details__label">location:</span>
                                        <span class="project-details__value">Riga</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="project__target-box">
                            <div class="target">
                                <div class="circle-bar">
                                    <svg class="circle-bar__rings">
                                        <circle class="circle-bar__ring-bg" cx='90' cy='90' r='85' />
                                        <circle class="circle-bar__ring-progress circle-bar__ring-progress--total"
                                            cx='90' cy='90' r='85' />
                                        <circle class="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                                        <circle class="circle-bar__ring-progress circle-bar__ring-progress--min"
                                            cx='90' cy='90' r='72' />
                                    </svg>
                                    <div class="circle-bar__percent-box">
                                        <span class="circle-bar__percent">14%</span>
                                        <span class="circle-bar__label"> of 50.000€ min</span>
                                        <span class="circle-bar__percent">32%</span>
                                        <span class="circle-bar__label"> of 128.500€ total</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project__bottom-container">

                        <a href="#" class="button button--info">View Project</a>
                    </div>
                </div>
            </div>
        </>
    )
}