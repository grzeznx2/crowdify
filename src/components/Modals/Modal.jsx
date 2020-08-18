import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.scss'

export default function Modal({ handleClick, outerContainerModifiers, title, children, contentModifiers }) {

    const modalRoot = document.getElementById('modal-root')

    const modalMarkup = <div className="modal">
        <div onClick={handleClick} className='modal__background'>
        </div>
        <div className={joinClasses('modal__outer-container', outerContainerModifiers)}>
            <div className="modal__inner-container">
                <div className={joinClasses("modal__content", contentModifiers)}>
                    {title ?
                        <h3 class="modal__title">{title}</h3> :
                        null
                    }
                    {children}
                </div>
            </div>
        </div>
    </div>

    return (
        ReactDOM.createPortal(modalMarkup, modalRoot)
    )
}