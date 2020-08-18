import React from 'react'
import ReactDOM from 'react-dom'

import { joinClasses } from '../../utils/utils'

import './Modal.scss'

export default function Modal({ handleClick, outerContainerModifiers, title, text, children, contentModifiers }) {

    const modalRoot = document.getElementById('modal-root')

    const modalMarkup = <div className="modal">
        <div onClick={handleClick} className='modal__background'>
        </div>
        <div className={joinClasses('modal__outer-container', outerContainerModifiers)}>
            <div className="modal__inner-container">
                <div className={joinClasses("modal__content", contentModifiers)}>
                    {title && <h3 class="modal__title heading-3 text-white">Withdraw</h3>}
                    {text && <p class="modal__text text-white">{text}</p>}
                    {children}
                </div>
            </div>
        </div>
    </div>

    return (
        ReactDOM.createPortal(modalMarkup, modalRoot)
    )
}