import React from 'react'

import DashboardNav from '../../components/DashboardNav/DashboardNav'

import './DashboardPage.scss'

export default function DashboardPage() {
  return (
    <section class="section-dashboard">
      <div class="container">
        <div class="section-dashboard__container">
          <div class="section-dashboard__nav">
            <div class="sticky-container sticky-container--dashboard-nav">
              <DashboardNav />
            </div>
          </div>
          <div class="section-dashboard__main">
            <header class="dashboard-header section-dashboard__header">
              <h3 class="heading-3 dashboard-header__title">Overview</h3>
              <div class="dashboard-header__buttons-container">
                <a href="#" class="button button--primary">Add Funds</a>
                <a href="#" class="button button--primary-inverse">Withdraw</a>
              </div>
            </header>
            <div class="section-dashboard__content">
              <section class="overview">
                <div class="overview__container">
                  <div class="section-dashboard__box">
                    <div class="data-box data-box--bg-white">
                      <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title data-box__title--text-left">My Transactions
								 </h5>
                      </div>
                      <div class="data-box__content-box">
                        <form action="#" class="form">
                          <div class="form__container form__container--filter-transactions">
                            <div class="input-group input-group--column">
                              <label for="register-first-name" class="input-group__label">First
											 Name:</label>
                              <input size="1" id="register-first-name" type="text"
                                class="input-group__input" />
                            </div>
                            <div class="input-group input-group--column">
                              <label for="register-first-name" class="input-group__label">First
											 Name:</label>
                              <input size="1" id="register-first-name" type="text"
                                class="input-group__input" />
                            </div>
                            <div class="input-group input-group--column">
                              <label for="register-first-name" class="input-group__label">First
											 Name:</label>
                              <input size="1" id="register-first-name" type="text"
                                class="input-group__input" />
                            </div>
                            <div class="input-group input-group--column">
                              <label for="register-first-name" class="input-group__label">First
											 Name:</label>
                              <input size="1" id="register-first-name" type="text"
                                class="input-group__input" />
                            </div>
                            <div class="input-group input-group--column">
                              <label for="register-first-name" class="input-group__label">First
											 Name:</label>
                              <input size="1" id="register-first-name" type="text"
                                class="input-group__input" />
                            </div>
                          </div>
                          <div class="form__button-wrapper form__button-wrapper--change-password">
                            <a href="#" class="button button--primary">Save Password</a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>


                  <div class="section-dashboard__box">
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
                  <div class="section-dashboard__box section-dashboard__box--small">
                    <div class="data-box data-box--bg-white">
                      <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title">Minimal Target</h5>
                      </div>
                      <div class="data-box__content-box">
                        <span class="data-box__value">25, 000 $</span>
                      </div>
                    </div>
                  </div>
                  <div class="section-dashboard__box section-dashboard__box--small">
                    <div class="data-box data-box--bg-white">
                      <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title">Minimal Target</h5>
                      </div>
                      <div class="data-box__content-box">
                        <span class="data-box__value">25, 000 $</span>
                      </div>
                    </div>
                  </div>
                  <div class="section-dashboard__box section-dashboard__box--small">
                    <div class="data-box data-box--bg-white">
                      <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title">Minimal Target</h5>
                      </div>
                      <div class="data-box__content-box">
                        <span class="data-box__value">25, 000 $</span>
                      </div>
                    </div>
                  </div>
                  <div class="section-dashboard__box section-dashboard__box--small">
                    <div class="data-box data-box--bg-white">
                      <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title">Minimal Target</h5>
                      </div>
                      <div class="data-box__content-box">
                        <span class="data-box__value">25, 000 $</span>
                      </div>
                    </div>
                  </div>
                  <div class="section-dashboard__box section-dashboard__box--small">
                    <div class="data-box data-box--bg-white">
                      <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title">Minimal Target</h5>
                      </div>
                      <div class="data-box__content-box">
                        <span class="data-box__value">25, 000 $</span>
                      </div>
                    </div>
                  </div>
                  <div class="section-dashboard__box section-dashboard__box--small">
                    <div class="data-box data-box--bg-white">
                      <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title">Minimal Target</h5>
                      </div>
                      <div class="data-box__content-box">
                        <span class="data-box__value">25, 000 $</span>
                      </div>
                    </div>
                  </div>
                  <div class="section-dashboard__box">
                    <div class="data-box data-box--bg-white">
                      <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title data-box__title--text-left">Password
								 </h5>
                      </div>
                      <div class="data-box__content-box">
                        <form action="#" class="form">
                          <div
                            class="form__container form__container--inline form__container--change-password">
                            <div class="input-group input-group--column">
                              <label for="register-first-name" class="input-group__label">First
											 Name:</label>
                              <input size="1" id="register-first-name" type="text"
                                class="input-group__input" />
                            </div>
                            <div class="input-group input-group--column">
                              <label for="register-first-name" class="input-group__label">First
											 Name:</label>
                              <input size="1" id="register-first-name" type="text"
                                class="input-group__input" />
                            </div>
                            <div class="input-group input-group--column">
                              <label for="register-first-name" class="input-group__label">First
											 Name:</label>
                              <input size="1" id="register-first-name" type="text"
                                class="input-group__input" />
                            </div>
                          </div>
                          <div class="form__button-wrapper form__button-wrapper--change-password">
                            <a href="#" class="button button--primary">Save Password</a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="section-dashboard__box">
                    <div class="data-box data-box--bg-white">
                      <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title data-box__title--text-left">Personal
                        Data
								 </h5>
                      </div>
                      <div class="data-box__content-box">
                        <form action="#" class="form">
                          <div class="form__container form__container--change-personal-data">
                            <div class="input-group input-group--inline input-group--change-personal-data">
                              <label for="change-personal-data-first-name" class="input-group__label">First
											 name:</label>
                              <input type="text" id='change-personal-data-first-name'
                                class="input-group__input input-group__input--invalid" />
                              <div class="input-group__round-buttons-container">
                                <button class="button-personal-data button-personal-data--edit">
                                  <svg class="button-personal-data__icon">
                                    <use xlinkHref='/img/sprite.svg#icon-edit' />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div class="input-group input-group--inline input-group--change-personal-data">
                              <label for="change-personal-data-first-name"
                                class="input-group__label">Email:</label>
                              <input type="text" id='change-personal-data-first-name'
                                class="input-group__input input-group__input--valid" />
                              <div class="input-group__round-buttons-container">
                                <button class="button-personal-data button-personal-data--edit">
                                </button>
                              </div>
                            </div>
                            <div class="input-group input-group--inline input-group--change-personal-data">
                              <label for="change-personal-data-first-name"
                                class="input-group__label">Address:</label>
                              <input type="text" id='change-personal-data-first-name'
                                class="input-group__input input-group__input" />
                              <div class="input-group__round-buttons-container">
                                <button class="button-personal-data button-personal-data--abort">
                                  <svg class="button-personal-data__icon">
                                    <use xlinkHref='/img/sprite.svg#icon-cross' />
                                  </svg>
                                </button>
                                <button class="button-personal-data button-personal-data--accept">
                                  <svg class="button-personal-data__icon">
                                    <use xlinkHref='/img/sprite.svg#icon-checkmark' />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div class="input-group input-group--inline input-group--change-personal-data">
                              <label for="change-personal-data-first-name"
                                class="input-group__label">Country:</label>
                              <input type="text" id='change-personal-data-first-name'
                                class="input-group__input input-group__input--invalid" />
                              <div class="input-group__round-buttons-container">
                                <button class="button-personal-data button-personal-data--edit">
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}