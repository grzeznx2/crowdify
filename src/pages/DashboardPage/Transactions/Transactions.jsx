import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import useFetch from '../../../hooks/useFetch'

import FilterTransactionsForm from '../../../components/Form/Forms/FilterTransactionsForm'
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
                        <FilterTransactionsForm />
                    </div>
                </div>
            </div>
            <div class="section-dashboard__box">
                <Table transactions={transactions} />
            </div>
        </>
    )
}