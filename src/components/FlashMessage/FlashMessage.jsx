import React from 'react'
import ReactDOM from 'react-dom'

import CloseButton from '../Button/CloseButton/CloseButton'

import { joinClasses } from '../../utils/utils'

import './FlashMessage.scss'

export default function FlashMessage() {
    const type = 'error'
    const text = 'Something went wrong'


    const flashMessageContainer = document.getElementById('flash-message-root')
    const flashMessageMarkup =
        <div className={joinClasses('flash-message', type)}>
            <div className="flash-message__content">
                <p className="flash-message__text">{text}</p>
            </div>
            <div className="flash-message__close-button-container">
                <CloseButton
                    modifiers='' />
            </div>
        </div>





    return ReactDOM.createPortal(flashMessageMarkup, flashMessageContainer)

}