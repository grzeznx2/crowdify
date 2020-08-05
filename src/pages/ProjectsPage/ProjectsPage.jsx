import React from 'react'

import './ProjectsPage.scss'

export default function ProjectsPage() {
    return (
        <section class="section-projects">
            <h2 class="section-title section-title--text-primary">Latest Projects</h2>
            <div class="filtration">
                <div class="container">
                    <div class="filtration__container">
                        <div class="filtration__box filtration__box--status">
                            <fieldset class="filtration__fieldset">
                                <legend class="filtration__legend">Status:</legend>
                                <div class="filtration__fields">
                                    <div class="filtration__field">
                                        <div class="checkbox checkbox--on-dark-bg">
                                            <input type="checkbox" name="filtration-status" id="filtration-status-all"
                                                class="checkbox__input" />
                                            <label for="filtration-status-all" class="checkbox__label">
                                                <span class="checkbox__button">
                                                    <svg class="checkbox__icon">
                                                        <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                    </svg>
                                                </span>
                                 all
                              </label>
                                        </div>
                                    </div>
                                    <div class="filtration__field">
                                        <div class="checkbox checkbox--on-dark-bg">
                                            <input type="checkbox" name="filtration-status" id="filtration-status-active"
                                                class="checkbox__input" />
                                            <label for="filtration-status-active" class="checkbox__label">
                                                <span class="checkbox__button">
                                                    <svg class="checkbox__icon">
                                                        <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                    </svg>
                                                </span>
                                 active
                              </label>
                                        </div>
                                    </div>
                                    <div class="filtration__field">
                                        <div class="checkbox checkbox--on-dark-bg">
                                            <input type="checkbox" name="filtration-status" id="filtration-status-coming"
                                                class="checkbox__input" />
                                            <label for="filtration-status-coming" class="checkbox__label">
                                                <span class="checkbox__button">
                                                    <svg class="checkbox__icon">
                                                        <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                    </svg>
                                                </span>
                                 coming
                              </label>
                                        </div>
                                    </div>
                                    <div class="filtration__field">
                                        <div class="checkbox checkbox--on-dark-bg">
                                            <input type="checkbox" name="filtration-status" id="filtration-status-funded"
                                                class="checkbox__input" />
                                            <label for="filtration-status-funded" class="checkbox__label">
                                                <span class="checkbox__button">
                                                    <svg class="checkbox__icon">
                                                        <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                    </svg>
                                                </span>
                                 funded
                              </label>
                                        </div>
                                    </div>
                                    <div class="filtration__field">
                                        <div class="checkbox checkbox--on-dark-bg">
                                            <input type="checkbox" name="filtration-status" id="filtration-status-repaid"
                                                class="checkbox__input" />
                                            <label for="filtration-status-repaid" class="checkbox__label">
                                                <span class="checkbox__button">
                                                    <svg class="checkbox__icon">
                                                        <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                    </svg>
                                                </span>
                                 repaid
                              </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="filtration__box filtration__box--type">
                            <fieldset class="filtration__fieldset">
                                <legend class="filtration__legend">Type:</legend>
                                <div class="filtration__fields">
                                    <div class="filtration__field">
                                        <div class="checkbox checkbox--on-dark-bg">
                                            <input type="checkbox" name="filtration-type" id="filtration-type-business"
                                                class="checkbox__input" />
                                            <label for="filtration-type-business" class="checkbox__label">
                                                <span class="checkbox__button">
                                                    <svg class="checkbox__icon">
                                                        <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                    </svg>
                                                </span>
                                 business
                              </label>
                                        </div>
                                    </div>
                                    <div class="filtration__field">
                                        <div class="checkbox checkbox--on-dark-bg">
                                            <input type="checkbox" name="filtration-type" id="filtration-type-logistics"
                                                class="checkbox__input" />
                                            <label for="filtration-type-logistics" class="checkbox__label">
                                                <span class="checkbox__button">
                                                    <svg class="checkbox__icon">
                                                        <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                    </svg>
                                                </span>
                                 logistics
                              </label>
                                        </div>
                                    </div>
                                    <div class="filtration__field">
                                        <div class="checkbox checkbox--on-dark-bg">
                                            <input type="checkbox" name="filtration-type" id="filtration-type-energy"
                                                class="checkbox__input" />
                                            <label for="filtration-type-energy" class="checkbox__label">
                                                <span class="checkbox__button">
                                                    <svg class="checkbox__icon">
                                                        <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                    </svg>
                                                </span>
                                 energy
                              </label>
                                        </div>
                                    </div>
                                    <div class="filtration__field">
                                        <div class="checkbox checkbox--on-dark-bg">
                                            <input type="checkbox" name="filtration-type" id="filtration-type-sme"
                                                class="checkbox__input" />
                                            <label for="filtration-type-sme" class="checkbox__label">
                                                <span class="checkbox__button">
                                                    <svg class="checkbox__icon">
                                                        <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                    </svg>
                                                </span>
                                 sme
                              </label>
                                        </div>
                                    </div>
                                    <div class="filtration__field">
                                        <div class="checkbox checkbox--on-dark-bg">
                                            <input type="checkbox" name="filtration-type" id="filtration-type-technology"
                                                class="checkbox__input" />
                                            <label for="filtration-type-technology" class="checkbox__label">
                                                <span class="checkbox__button">
                                                    <svg class="checkbox__icon">
                                                        <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                    </svg>
                                                </span>
                                 technology
                              </label>
                                        </div>
                                    </div>
                                    <div class="filtration__field">
                                        <div class="checkbox checkbox--on-dark-bg">
                                            <input type="checkbox" name="filtration-type" id="filtration-type-real-estate"
                                                class="checkbox__input" />
                                            <label for="filtration-type-real-estate" class="checkbox__label">
                                                <span class="checkbox__button">
                                                    <svg class="checkbox__icon">
                                                        <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                    </svg>
                                                </span>
                                 real estate
                              </label>
                                        </div>
                                    </div>
                                    <div class="filtration__field">
                                        <div class="checkbox checkbox--on-dark-bg">
                                            <input type="checkbox" name="filtration-type" id="filtration-type-entertainment"
                                                class="checkbox__input" />
                                            <label for="filtration-type-entertainment" class="checkbox__label">
                                                <span class="checkbox__button">
                                                    <svg class="checkbox__icon">
                                                        <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                    </svg>
                                                </span>
                                 entertainment
                              </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="filtration__box filtration__box--sort">
                            <div class="input-group input-group--column input-group--on-blue-bg">
                                <label for="filtration-sort" class="input-group__label">Sort by:</label>
                                <select id="filtration-sort" name="filtration-sort" type="select" class="input-group__input">
                                    <option value="interest-rate">Interest Rate</option>
                                    <option value="duration">Duration</option>
                                    <option value="payments-rate">Payments Rate</option>
                                </select>
                            </div>
                            <div class="input-group">
                                <div class="range-slider">
                                    <label class="range-slider__label">Interest Rate:</label>
                                    <div class="range-slider__outputs">
                                        <span class="range-slider__output">12%</span>
                           -
                           <span class="range-slider__output">26%</span>
                                    </div>
                                    <div class="range-slider__slider-container">
                                        <input type="range" min='10' max='32' value='16'
                                            class="range-slider__input range-slider__input--left" />
                                        <input type="range" min='10' max='32' value='26'
                                            class="range-slider__input range-slider__input--right" />
                                        <div class="range-slider__track"></div>
                                        <div class="range-slider__range range-slider__range--multi"></div>
                                    </div>
                                </div>

                            </div>
                            <div class="input-group">
                                <div class="range-slider">
                                    <label class="range-slider__label">Duration:</label>
                                    <div class="range-slider__outputs">
                                        <span class="range-slider__output">1m</span>
                           -
                           <span class="range-slider__output">24m</span>
                                    </div>
                                    <div class="range-slider__slider-container">
                                        <input type="range" min='1' max='24' value='3'
                                            class="range-slider__input range-slider__input--left" />
                                        <input type="range" min='1' max='24' value='16'
                                            class="range-slider__input range-slider__input--right" />
                                        <div class="range-slider__track"></div>
                                        <div class="range-slider__range range-slider__range--multi"></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="filtration__box filtration__box--target">
                            <div class="input-group input-group--column input-group--on-blue-bg">
                                <label for="filtration-min-target" class="input-group__label">Min. Target:</label>
                                <input id="filtration-min-target" type="number" class="input-group__input" min="0" step="10" />
                            </div>
                            <div class="input-group input-group--column input-group--on-blue-bg">
                                <label for="filtration-max-target" class="input-group__label">Max. Target:</label>
                                <input id="filtration-max-target" type="number" class="input-group__input" min="0" step="10" />
                            </div>
                            <div class="filtration-group filtration__button-wrapper">
                                <a href="#" class="button button--info">Search Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="section-projects__projects-container">
                    <div class="section-projects__project">
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
                                                <circle class="circle-bar__ring-progress circle-bar__ring-progress--total" cx='90'
                                                    cy='90' r='85' />
                                                <circle class="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                                                <circle class="circle-bar__ring-progress circle-bar__ring-progress--min" cx='90'
                                                    cy='90' r='72' />
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
                    <div class="section-projects__project">
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
                                                <circle class="circle-bar__ring-progress circle-bar__ring-progress--total" cx='90'
                                                    cy='90' r='85' />
                                                <circle class="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                                                <circle class="circle-bar__ring-progress circle-bar__ring-progress--min" cx='90'
                                                    cy='90' r='72' />
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
                    <div class="section-projects__project">
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
                                                <circle class="circle-bar__ring-progress circle-bar__ring-progress--total" cx='90'
                                                    cy='90' r='85' />
                                                <circle class="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                                                <circle class="circle-bar__ring-progress circle-bar__ring-progress--min" cx='90'
                                                    cy='90' r='72' />
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
                    <div class="section-projects__project">
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
                                                <circle class="circle-bar__ring-progress circle-bar__ring-progress--total" cx='90'
                                                    cy='90' r='85' />
                                                <circle class="circle-bar__ring-bg" cx='90' cy='90' r='72' />
                                                <circle class="circle-bar__ring-progress circle-bar__ring-progress--min" cx='90'
                                                    cy='90' r='72' />
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
                </div>
            </div>
            <div class="pagination">
                <a href="#" class="pagination__button pagination__button--arrow">
                    <svg class="pagination__icon">
                        <use xlinkHref='/img/sprite.svg#icon-chevron-left' />
                    </svg>
                </a>
                <a href="#" class="pagination__button">1</a>
                <a href="#" class="pagination__button">2</a>
                <a href="#" class="pagination__button">3</a>
                <a href="#" class="pagination__button">4</a>
                <a href="#" class="pagination__button">5</a>
                <a href="#" class="pagination__button">6</a>
                <a href="#" class="pagination__button">7</a>
                <a href="#" class="pagination__button">8</a>
                <a href="#" class="pagination__button pagination__button--active">9</a>
                <a href="#" class="pagination__button">10</a>
                <a href="#" class="pagination__button">
                    <svg class="pagination__icon">
                        <use xlinkHref='/img/sprite.svg#icon-chevron-right' />
                    </svg>
                </a>
            </div>
        </section>
    )
}