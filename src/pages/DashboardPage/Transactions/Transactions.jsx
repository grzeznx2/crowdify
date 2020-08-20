import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import useFetch from '../../../hooks/useFetch'

import Table from '../Tables/Table'

export default function Transactions({ changeTitle }) {
    const userTransactions = useSelector(state => state.user.currentUser.transactions)
    const { isLoading, error, sendRequest } = useFetch()
    const [transactions, setTransactions] = useState(userTransactions)

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
                <Table transactions={transactions} />
            </div>
        </>
    )
}