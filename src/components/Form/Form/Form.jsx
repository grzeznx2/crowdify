import React, { useReducer } from 'react'

import Button from '../../Button/Button'
import InputGroup from '../Inputs/InputGroup/InputGroup'

import './Form.scss'



export default function Form() {


    return (
        <form action="#" className="form">
            <div className="form__container form__container--subscribe">
                <div className="input-group input-group--column">
                    <label for="subscribe-name" className="input-group__label">Name:</label>
                    <input id="subscribe-name" type="text" className="input-group__input input-group__input--invalid" />
                    <div className="error">
                        <svg className="error__icon">
                            <use xlinkHref='/img/sprite.svg#icon-circle-with-cross' />
                        </svg>
                        <span className="error__message">Name is required.</span>
                    </div>
                    <div className="error">
                        <svg className="error__icon">
                            <use xlinkHref='/img/sprite.svg#icon-circle-with-cross' />
                        </svg>
                        <span className="error__message">Name is required.</span>
                    </div>
                </div>
                <div className="input-group input-group--column">
                    <label for="subscribe-email" className="input-group__label">Email:</label>
                    <input id="subscribe-email" type="text" className="input-group__input input-group__input--valid" />
                </div>
            </div>
            <div className="form__button-wrapper">
                <Button to='/' modifiers={['primary']}>subscribe</Button>
            </div>
        </form>
    )
}
