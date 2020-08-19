import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'

import CloseButton from '../Button/CloseButton/CloseButton'

import { clearFlashMessage } from '../../redux/flashMessage/actions'

import { joinClasses } from '../../utils/utils'

import './FlashMessage.scss'

export default function FlashMessage({ text, messageType }) {
    const dispatch = useDispatch()

    useEffect(() => {
        let mounted = true

        setTimeout(() => {
            if (mounted) dispatch(clearFlashMessage())
        }, 5000)

        return () => mounted = false
    }, [dispatch])

    const closeFlashMessage = () => dispatch(clearFlashMessage())

    const flashMessageContainer = document.getElementById('flash-message-root')

    const flashMessageMarkup =
        <div className={joinClasses('flash-message', messageType)}>
            <div className="flash-message__content">
                <p className="flash-message__text">{text}</p>
            </div>
            <div className="flash-message__close-button-container">
                <CloseButton
                    handleClick={closeFlashMessage}
                />
            </div>
        </div>

    return ReactDOM.createPortal(flashMessageMarkup, flashMessageContainer)

}