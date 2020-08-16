import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { logout } from '../../redux/user/actions'

export default function Logout() {
    const user = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(logout())
    }, [])

    return (
        <>
            {!user && <Redirect to='/' />}
        </>
    )
}