import React from 'react'
import ReactDOM from 'react-dom'

import CloseButton from '../Button/CloseButton/CloseButton'

import { joinClasses } from '../../utils/utils'

import './Modal.scss'

export default function Modal({ isModalOpen, closeModal, outerContainerModifiers, title, text, children, contentModifiers }) {

    const modalRoot = document.getElementById('modal-root')

    const modalMarkup = <div className="modal">
        <div onClick={closeModal} className='modal__background'>
        </div>
        <div className={joinClasses('modal__outer-container', outerContainerModifiers)}>
            <CloseButton otherClasses='modal__button-close' handleClick={closeModal} iconModifiers='hv-fill-primary' />
            <div className="modal__inner-container">
                <div className={joinClasses("modal__content", contentModifiers)}>
                    {title && <h3 class="modal__title heading-3 text-white">{title}</h3>}
                    {text && <p class="modal__text text-white">{text}</p>}
                    {children}
                </div>
            </div>
        </div>
    </div>

    return isModalOpen && ReactDOM.createPortal(modalMarkup, modalRoot)
}