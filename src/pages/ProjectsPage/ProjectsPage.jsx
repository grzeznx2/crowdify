import React, { useState, useCallback } from 'react'

import Filtration from '../../components/Filtration/Filtration'

import './ProjectsPage.scss'

export default function ProjectsPage() {
    const [fetchStatus, setFetchStatus] = useState(null)

    const filtrationHandler = useCallback(fetchStatus => {
        console.log(fetchStatus.data)
        setFetchStatus(fetchStatus)
    }, [fetchStatus])

    return (
        <section className="section-projects">
            <h2 className="section-title section-title--text-primary">Latest Projects</h2>
            <Filtration onSearch={filtrationHandler} />
            <div className="container">
                <div className="section-projects__projects-container">
                    <div className="section-projects__project">
                        <div className="project project--no-gutters">
                            <div className="project__top-container">
                                <div className="project__image-box">
                                </div>
                                <div className="project__title-box">
                                    <h3 className="heading-4 text-white">
                                        Modern, high quality detached house project
                        </h3>
                                </div>
                            </div>
                            <div className="project__middle-container">

                                <div className="project__details-box">
                                    <div className="project-details">
                                        <ul className="project-details__list">
                                            <li className="project-details__item">
                                                <span className="project-details__label">interest rate:</span>
                                                <span className="project-details__value">25%</span>
                                            </li>
                                            <li className="project-details__item">
                                                <span className="project-details__label">type:</span>
                                                <span className="project-details__value">Entertainment</span>
                                            </li>
                                            <li className="project-details__item">
                                                <span className="project-details__label">period:</span>
                                                <span className="project-details__value">6 months</span>
                                            </li>
                                            <li className="project-details__item">
                                                <span className="project-details__label">location:</span>
                                                <span className="project-details__value">Riga</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="project__target-box">
                                    <div className="target">
                                        <div className="circle-bar">
                                            <svg className="circle-bar__rings">
                                                <circle className="circle-bar__ring-bg" cx='90' cy='90' r='85' />
                                                <circle className="circle-bar__ring-progress circle-bar__ring-progress--total" cx='90'
                                                    cy='90' r='85' />
                                                <circle className="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                                                <circle className="circle-bar__ring-progress circle-bar__ring-progress--min" cx='90'
                                                    cy='90' r='72' />
                                            </svg>
                                            <div className="circle-bar__percent-box">
                                                <span className="circle-bar__percent">14%</span>
                                                <span className="circle-bar__label"> of 50.000€ min</span>
                                                <span className="circle-bar__percent">32%</span>
                                                <span className="circle-bar__label"> of 128.500€ total</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project__bottom-container">

                                <a href="#" className="button button--info">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="section-projects__project">
                        <div className="project project--no-gutters">
                            <div className="project__top-container">
                                <div className="project__image-box">
                                </div>
                                <div className="project__title-box">
                                    <h3 className="heading-4 text-white">
                                        Modern, high quality detached house project
                        </h3>
                                </div>
                            </div>
                            <div className="project__middle-container">

                                <div className="project__details-box">
                                    <div className="project-details">
                                        <ul className="project-details__list">
                                            <li className="project-details__item">
                                                <span className="project-details__label">interest rate:</span>
                                                <span className="project-details__value">25%</span>
                                            </li>
                                            <li className="project-details__item">
                                                <span className="project-details__label">type:</span>
                                                <span className="project-details__value">Entertainment</span>
                                            </li>
                                            <li className="project-details__item">
                                                <span className="project-details__label">period:</span>
                                                <span className="project-details__value">6 months</span>
                                            </li>
                                            <li className="project-details__item">
                                                <span className="project-details__label">location:</span>
                                                <span className="project-details__value">Riga</span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="project__target-box">
                                    <div className="target">
                                        <div className="circle-bar">
                                            <svg className="circle-bar__rings">
                                                <circle className="circle-bar__ring-bg" cx='90' cy='90' r='85' />
                                                <circle className="circle-bar__ring-progress circle-bar__ring-progress--total" cx='90'
                                                    cy='90' r='85' />
                                                <circle className="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                                                <circle className="circle-bar__ring-progress circle-bar__ring-progress--min" cx='90'
                                                    cy='90' r='72' />
                                            </svg>
                                            <div className="circle-bar__percent-box">
                                                <span className="circle-bar__percent">14%</span>
                                                <span className="circle-bar__label"> of 50.000€ min</span>
                                                <span className="circle-bar__percent">32%</span>
                                                <span className="circle-bar__label"> of 128.500€ total</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project__bottom-container">

                                <a href="#" className="button button--info">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="section-projects__project">
                        <div className="project project--no-gutters">
                            <div className="project__top-container">
                                <div className="project__image-box">
                                </div>
                                <div className="project__title-box">
                                    <h3 className="heading-4 text-white">
                                        Modern, high quality detached house project
                        </h3>
                                </div>
                            </div>
                            <div className="project__middle-container">

                                <div className="project__details-box">
                                    <div className="project-details">
                                        <ul className="project-details__list">
                                            <li className="project-details__item">
                                                <span className="project-details__label">interest rate:</span>
                                                <span className="project-details__value">25%</span>
                                            </li>
                                            <li className="project-details__item">
                                                <span className="project-details__label">type:</span>
                                                <span className="project-details__value">Entertainment</span>
                                            </li>
                                            <li className="project-details__item">
                                                <span className="project-details__label">period:</span>
                                                <span className="project-details__value">6 months</span>
                                            </li>
                                            <li className="project-details__item">
                                                <span className="project-details__label">location:</span>
                                                <span className="project-details__value">Riga</span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="project__target-box">
                                    <div className="target">
                                        <div className="circle-bar">
                                            <svg className="circle-bar__rings">
                                                <circle className="circle-bar__ring-bg" cx='90' cy='90' r='85' />
                                                <circle className="circle-bar__ring-progress circle-bar__ring-progress--total" cx='90'
                                                    cy='90' r='85' />
                                                <circle className="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                                                <circle className="circle-bar__ring-progress circle-bar__ring-progress--min" cx='90'
                                                    cy='90' r='72' />
                                            </svg>
                                            <div className="circle-bar__percent-box">
                                                <span className="circle-bar__percent">14%</span>
                                                <span className="circle-bar__label"> of 50.000€ min</span>
                                                <span className="circle-bar__percent">32%</span>
                                                <span className="circle-bar__label"> of 128.500€ total</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project__bottom-container">

                                <a href="#" className="button button--info">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="section-projects__project">
                        <div className="project project--no-gutters">
                            <div className="project__top-container">
                                <div className="project__image-box">
                                </div>
                                <div className="project__title-box">
                                    <h3 className="heading-4 text-white">
                                        Modern, high quality detached house project
                        </h3>
                                </div>
                            </div>
                            <div className="project__middle-container">

                                <div className="project__details-box">
                                    <div className="project-details">
                                        <ul className="project-details__list">
                                            <li className="project-details__item">
                                                <span className="project-details__label">interest rate:</span>
                                                <span className="project-details__value">25%</span>
                                            </li>
                                            <li className="project-details__item">
                                                <span className="project-details__label">type:</span>
                                                <span className="project-details__value">Entertainment</span>
                                            </li>
                                            <li className="project-details__item">
                                                <span className="project-details__label">period:</span>
                                                <span className="project-details__value">6 months</span>
                                            </li>
                                            <li className="project-details__item">
                                                <span className="project-details__label">location:</span>
                                                <span className="project-details__value">Riga</span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="project__target-box">
                                    <div className="target">
                                        <div className="circle-bar">
                                            <svg className="circle-bar__rings">
                                                <circle className="circle-bar__ring-bg" cx='90' cy='90' r='85' />
                                                <circle className="circle-bar__ring-progress circle-bar__ring-progress--total" cx='90'
                                                    cy='90' r='85' />
                                                <circle className="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                                                <circle className="circle-bar__ring-progress circle-bar__ring-progress--min" cx='90'
                                                    cy='90' r='72' />
                                            </svg>
                                            <div className="circle-bar__percent-box">
                                                <span className="circle-bar__percent">14%</span>
                                                <span className="circle-bar__label"> of 50.000€ min</span>
                                                <span className="circle-bar__percent">32%</span>
                                                <span className="circle-bar__label"> of 128.500€ total</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project__bottom-container">

                                <a href="#" className="button button--info">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pagination">
                <a href="#" className="pagination__button pagination__button--arrow">
                    <svg className="pagination__icon">
                        <use xlinkHref='/img/sprite.svg#icon-chevron-left' />
                    </svg>
                </a>
                <a href="#" className="pagination__button">1</a>
                <a href="#" className="pagination__button">2</a>
                <a href="#" className="pagination__button">3</a>
                <a href="#" className="pagination__button">4</a>
                <a href="#" className="pagination__button">5</a>
                <a href="#" className="pagination__button">6</a>
                <a href="#" className="pagination__button">7</a>
                <a href="#" className="pagination__button">8</a>
                <a href="#" className="pagination__button pagination__button--active">9</a>
                <a href="#" className="pagination__button">10</a>
                <a href="#" className="pagination__button">
                    <svg className="pagination__icon">
                        <use xlinkHref='/img/sprite.svg#icon-chevron-right' />
                    </svg>
                </a>
            </div>
        </section>
    )
}