import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal() {

    const modalRoot = document.getElementById('modal-root')

    const modalMarkup = <div className="modal">
        <div onClick={handleClick} className='modal__background'>
        </div>
        <div className={joinClasses('modal__outer-container', outerContainerModifiers)}>
            <div className="modal__inner-container">
                {
                    headerTitle ?
                        <div className="modal__header">
                            <h3 className="modal__title">{headerTitle}</h3>
                        </div> :
                        null
                }
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