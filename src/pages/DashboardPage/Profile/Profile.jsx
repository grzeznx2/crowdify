import React from 'react'

export default function Profile() {
    return (
        <>
            <div class="section-dashboard__box">
                <div class="data-box data-box--bg-white">
                    <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title data-box__title--text-left">Password
								 </h5>
                    </div>
                    <div class="data-box__content-box">
                        <form action="#" class="form">
                            <div
                                class="form__container form__container--inline form__container--change-password">
                                <div class="input-group input-group--column">
                                    <label for="register-first-name" class="input-group__label">First
											 Name:</label>
                                    <input size="1" id="register-first-name" type="text"
                                        class="input-group__input" />
                                </div>
                                <div class="input-group input-group--column">
                                    <label for="register-first-name" class="input-group__label">First
											 Name:</label>
                                    <input size="1" id="register-first-name" type="text"
                                        class="input-group__input" />
                                </div>
                                <div class="input-group input-group--column">
                                    <label for="register-first-name" class="input-group__label">First
											 Name:</label>
                                    <input size="1" id="register-first-name" type="text"
                                        class="input-group__input" />
                                </div>
                            </div>
                            <div class="form__button-wrapper form__button-wrapper--change-password">
                                <a href="#" class="button button--primary">Save Password</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="section-dashboard__box">
                <div class="data-box data-box--bg-white">
                    <div class="data-box__title-box">
                        <h5 class="heading-5 data-box__title data-box__title--text-left">Personal
                        Data
								 </h5>
                    </div>
                    <div class="data-box__content-box">
                        <form action="#" class="form">
                            <div class="form__container form__container--change-personal-data">
                                <div class="input-group input-group--inline input-group--change-personal-data">
                                    <label for="change-personal-data-first-name" class="input-group__label">First
											 name:</label>
                                    <input type="text" id='change-personal-data-first-name'
                                        class="input-group__input input-group__input--invalid" />
                                    <div class="input-group__round-buttons-container">
                                        <button class="button-personal-data button-personal-data--edit">
                                            <svg class="button-personal-data__icon">
                                                <use xlinkHref='/img/sprite.svg#icon-edit' />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="input-group input-group--inline input-group--change-personal-data">
                                    <label for="change-personal-data-first-name"
                                        class="input-group__label">Email:</label>
                                    <input type="text" id='change-personal-data-first-name'
                                        class="input-group__input input-group__input--valid" />
                                    <div class="input-group__round-buttons-container">
                                        <button class="button-personal-data button-personal-data--edit">
                                        </button>
                                    </div>
                                </div>
                                <div class="input-group input-group--inline input-group--change-personal-data">
                                    <label for="change-personal-data-first-name"
                                        class="input-group__label">Address:</label>
                                    <input type="text" id='change-personal-data-first-name'
                                        class="input-group__input input-group__input" />
                                    <div class="input-group__round-buttons-container">
                                        <button class="button-personal-data button-personal-data--abort">
                                            <svg class="button-personal-data__icon">
                                                <use xlinkHref='/img/sprite.svg#icon-cross' />
                                            </svg>
                                        </button>
                                        <button class="button-personal-data button-personal-data--accept">
                                            <svg class="button-personal-data__icon">
                                                <use xlinkHref='/img/sprite.svg#icon-checkmark' />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="input-group input-group--inline input-group--change-personal-data">
                                    <label for="change-personal-data-first-name"
                                        class="input-group__label">Country:</label>
                                    <input type="text" id='change-personal-data-first-name'
                                        class="input-group__input input-group__input--invalid" />
                                    <div class="input-group__round-buttons-container">
                                        <button class="button-personal-data button-personal-data--edit">
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