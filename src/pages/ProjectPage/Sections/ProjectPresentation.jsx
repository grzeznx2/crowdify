import React from 'react'

export default function ProjectPresentation() {
    return (
        <section class="section-project-presentation">
            <div class="container">
                <div class="project-presentation">
                    <div class="project-presentation__container project-presentation__container--title-container">
                        <div class="project-presentation__title-box">
                            <h3 class="heading-3">Estonia</h3>
                            <h2 class="heading-2 text-bold project-presentation__title">Biggest Renovable Energy Farm
                   </h2>
                            <a href="#" class="button button--primary">Invest</a>
                        </div>
                    </div>
                    <div class="project-presentation__container project-presentation__container--image-container">
                        <div class="project-presentation__target-details-container">
                            <div class="project-presentation__target-box">
                                <div class="target">
                                    <div class="circle-bar circle-bar--bg-dark">
                                        <svg class="circle-bar__rings">
                                            <circle class="circle-bar__ring-bg" cx='90' cy='90' r='85' />
                                            <circle class="circle-bar__ring-progress circle-bar__ring-progress--total" cx='90' cy='90'
                                                r='85' />
                                            <circle class="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                                            <circle class="circle-bar__ring-progress circle-bar__ring-progress--min" cx='90' cy='90'
                                                r='72' />
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
                            <div class="project-presentation__details-box">
                                <div class="project-details project-details--bg-dark">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}