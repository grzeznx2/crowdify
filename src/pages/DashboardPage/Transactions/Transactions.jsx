import React, { useEffect } from 'react'

export default function Transactions({ changeTitle }) {
    useEffect(() => {
        changeTitle()
    }, [])
    return (
        <>
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
        </>
    )
}