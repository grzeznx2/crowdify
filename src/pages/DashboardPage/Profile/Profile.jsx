import React from 'react'

import ChangePasswordForm from '../../../components/Form/Forms/ChangePasswordForm'

export default function Profile() {
    return (
        <>
            <div className="section-dashboard__box">
                <div className="data-box data-box--bg-white">
                    <div className="data-box__title-box">
                        <h5 className="heading-5 data-box__title data-box__title--text-left">Password
								 </h5>
                    </div>
                    <div className="data-box__content-box">
                        <ChangePasswordForm />
                    </div>
                </div>
            </div>
            <div className="section-dashboard__box">
                <div className="data-box data-box--bg-white">
                    <div className="data-box__title-box">
                        <h5 className="heading-5 data-box__title data-box__title--text-left">Personal
                        Data
								 </h5>
                    </div>
                    <div className="data-box__content-box">
                        <form action="#" className="form">
                            <div className="form__container form__container--change-personal-data">
                                <div className="input-group input-group--change-personal-data">
                                    <label for="change-personal-data-first-name" className="input-group__label">First
											 name:</label>
                                    <input type="text" id='change-personal-data-first-name'
                                        className="input-group__input input-group__input--invalid" />
                                    <div className="input-group__round-buttons-container">
                                        <button className="button-personal-data button-personal-data--edit">
                                            <svg className="button-personal-data__icon">
                                                <use xlinkHref='/img/sprite.svg#icon-edit' />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="input-group input-group--change-personal-data">
                                    <label for="change-personal-data-first-name"
                                        className="input-group__label">Email:</label>
                                    <input type="text" id='change-personal-data-first-name'
                                        className="input-group__input input-group__input--valid" />
                                    <div className="input-group__round-buttons-container">
                                        <button className="button-personal-data button-personal-data--edit">
                                        </button>
                                    </div>
                                </div>
                                <div className="input-group input-group--change-personal-data">
                                    <label for="change-personal-data-first-name"
                                        className="input-group__label">Address:</label>
                                    <input type="text" id='change-personal-data-first-name'
                                        className="input-group__input input-group__input" />
                                    <div className="input-group__round-buttons-container">
                                        <button className="button-personal-data button-personal-data--abort">
                                            <svg className="button-personal-data__icon">
                                                <use xlinkHref='/img/sprite.svg#icon-cross' />
                                            </svg>
                                        </button>
                                        <button className="button-personal-data button-personal-data--accept">
                                            <svg className="button-personal-data__icon">
                                                <use xlinkHref='/img/sprite.svg#icon-checkmark' />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="input-group input-group--change-personal-data">
                                    <label for="change-personal-data-first-name"
                                        className="input-group__label">Country:</label>
                                    <input type="text" id='change-personal-data-first-name'
                                        className="input-group__input input-group__input--invalid" />
                                    <div className="input-group__round-buttons-container">
                                        <button className="button-personal-data button-personal-data--edit">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}