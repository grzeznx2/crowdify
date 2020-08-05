import React from 'react'

import './Filtration.scss'

export default function Filtration() {
    return (
        <div class="filtration">
            <div class="container">
                <div class="filtration__container">
                    <div class="filtration__box filtration__box--status">
                        <fieldset class="filtration__fieldset">
                            <legend class="filtration__legend">Status:</legend>
                            <div class="filtration__fields">
                                <div class="filtration__field">
                                    <div class="checkbox checkbox--on-dark-bg">
                                        <input type="checkbox" name="filtration-status" id="filtration-status-all"
                                            class="checkbox__input" />
                                        <label for="filtration-status-all" class="checkbox__label">
                                            <span class="checkbox__button">
                                                <svg class="checkbox__icon">
                                                    <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                </svg>
                                            </span>
                                 all
                              </label>
                                    </div>
                                </div>
                                <div class="filtration__field">
                                    <div class="checkbox checkbox--on-dark-bg">
                                        <input type="checkbox" name="filtration-status" id="filtration-status-active"
                                            class="checkbox__input" />
                                        <label for="filtration-status-active" class="checkbox__label">
                                            <span class="checkbox__button">
                                                <svg class="checkbox__icon">
                                                    <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                </svg>
                                            </span>
                                 active
                              </label>
                                    </div>
                                </div>
                                <div class="filtration__field">
                                    <div class="checkbox checkbox--on-dark-bg">
                                        <input type="checkbox" name="filtration-status" id="filtration-status-coming"
                                            class="checkbox__input" />
                                        <label for="filtration-status-coming" class="checkbox__label">
                                            <span class="checkbox__button">
                                                <svg class="checkbox__icon">
                                                    <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                </svg>
                                            </span>
                                 coming
                              </label>
                                    </div>
                                </div>
                                <div class="filtration__field">
                                    <div class="checkbox checkbox--on-dark-bg">
                                        <input type="checkbox" name="filtration-status" id="filtration-status-funded"
                                            class="checkbox__input" />
                                        <label for="filtration-status-funded" class="checkbox__label">
                                            <span class="checkbox__button">
                                                <svg class="checkbox__icon">
                                                    <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                </svg>
                                            </span>
                                 funded
                              </label>
                                    </div>
                                </div>
                                <div class="filtration__field">
                                    <div class="checkbox checkbox--on-dark-bg">
                                        <input type="checkbox" name="filtration-status" id="filtration-status-repaid"
                                            class="checkbox__input" />
                                        <label for="filtration-status-repaid" class="checkbox__label">
                                            <span class="checkbox__button">
                                                <svg class="checkbox__icon">
                                                    <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                </svg>
                                            </span>
                                 repaid
                              </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="filtration__box filtration__box--type">
                        <fieldset class="filtration__fieldset">
                            <legend class="filtration__legend">Type:</legend>
                            <div class="filtration__fields">
                                <div class="filtration__field">
                                    <div class="checkbox checkbox--on-dark-bg">
                                        <input type="checkbox" name="filtration-type" id="filtration-type-business"
                                            class="checkbox__input" />
                                        <label for="filtration-type-business" class="checkbox__label">
                                            <span class="checkbox__button">
                                                <svg class="checkbox__icon">
                                                    <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                </svg>
                                            </span>
                                 business
                              </label>
                                    </div>
                                </div>
                                <div class="filtration__field">
                                    <div class="checkbox checkbox--on-dark-bg">
                                        <input type="checkbox" name="filtration-type" id="filtration-type-logistics"
                                            class="checkbox__input" />
                                        <label for="filtration-type-logistics" class="checkbox__label">
                                            <span class="checkbox__button">
                                                <svg class="checkbox__icon">
                                                    <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                </svg>
                                            </span>
                                 logistics
                              </label>
                                    </div>
                                </div>
                                <div class="filtration__field">
                                    <div class="checkbox checkbox--on-dark-bg">
                                        <input type="checkbox" name="filtration-type" id="filtration-type-energy"
                                            class="checkbox__input" />
                                        <label for="filtration-type-energy" class="checkbox__label">
                                            <span class="checkbox__button">
                                                <svg class="checkbox__icon">
                                                    <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                </svg>
                                            </span>
                                 energy
                              </label>
                                    </div>
                                </div>
                                <div class="filtration__field">
                                    <div class="checkbox checkbox--on-dark-bg">
                                        <input type="checkbox" name="filtration-type" id="filtration-type-sme"
                                            class="checkbox__input" />
                                        <label for="filtration-type-sme" class="checkbox__label">
                                            <span class="checkbox__button">
                                                <svg class="checkbox__icon">
                                                    <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                </svg>
                                            </span>
                                 sme
                              </label>
                                    </div>
                                </div>
                                <div class="filtration__field">
                                    <div class="checkbox checkbox--on-dark-bg">
                                        <input type="checkbox" name="filtration-type" id="filtration-type-technology"
                                            class="checkbox__input" />
                                        <label for="filtration-type-technology" class="checkbox__label">
                                            <span class="checkbox__button">
                                                <svg class="checkbox__icon">
                                                    <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                </svg>
                                            </span>
                                 technology
                              </label>
                                    </div>
                                </div>
                                <div class="filtration__field">
                                    <div class="checkbox checkbox--on-dark-bg">
                                        <input type="checkbox" name="filtration-type" id="filtration-type-real-estate"
                                            class="checkbox__input" />
                                        <label for="filtration-type-real-estate" class="checkbox__label">
                                            <span class="checkbox__button">
                                                <svg class="checkbox__icon">
                                                    <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                </svg>
                                            </span>
                                 real estate
                              </label>
                                    </div>
                                </div>
                                <div class="filtration__field">
                                    <div class="checkbox checkbox--on-dark-bg">
                                        <input type="checkbox" name="filtration-type" id="filtration-type-entertainment"
                                            class="checkbox__input" />
                                        <label for="filtration-type-entertainment" class="checkbox__label">
                                            <span class="checkbox__button">
                                                <svg class="checkbox__icon">
                                                    <use xlinkHref="/img/sprite.svg#icon-checkmark" />
                                                </svg>
                                            </span>
                                 entertainment
                              </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="filtration__box filtration__box--sort">
                        <div class="input-group input-group--column input-group--on-blue-bg">
                            <label for="filtration-sort" class="input-group__label">Sort by:</label>
                            <select id="filtration-sort" name="filtration-sort" type="select" class="input-group__input">
                                <option value="interest-rate">Interest Rate</option>
                                <option value="duration">Duration</option>
                                <option value="payments-rate">Payments Rate</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <div class="range-slider">
                                <label class="range-slider__label">Interest Rate:</label>
                                <div class="range-slider__outputs">
                                    <span class="range-slider__output">12%</span>
                           -
                           <span class="range-slider__output">26%</span>
                                </div>
                                <div class="range-slider__slider-container">
                                    <input type="range" min='10' max='32' value='16'
                                        class="range-slider__input range-slider__input--left" />
                                    <input type="range" min='10' max='32' value='26'
                                        class="range-slider__input range-slider__input--right" />
                                    <div class="range-slider__track"></div>
                                    <div class="range-slider__range range-slider__range--multi"></div>
                                </div>
                            </div>

                        </div>
                        <div class="input-group">
                            <div class="range-slider">
                                <label class="range-slider__label">Duration:</label>
                                <div class="range-slider__outputs">
                                    <span class="range-slider__output">1m</span>
                           -
                           <span class="range-slider__output">24m</span>
                                </div>
                                <div class="range-slider__slider-container">
                                    <input type="range" min='1' max='24' value='3'
                                        class="range-slider__input range-slider__input--left" />
                                    <input type="range" min='1' max='24' value='16'
                                        class="range-slider__input range-slider__input--right" />
                                    <div class="range-slider__track"></div>
                                    <div class="range-slider__range range-slider__range--multi"></div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="filtration__box filtration__box--target">
                        <div class="input-group input-group--column input-group--on-blue-bg">
                            <label for="filtration-min-target" class="input-group__label">Min. Target:</label>
                            <input id="filtration-min-target" type="number" class="input-group__input" min="0" step="10" />
                        </div>
                        <div class="input-group input-group--column input-group--on-blue-bg">
                            <label for="filtration-max-target" class="input-group__label">Max. Target:</label>
                            <input id="filtration-max-target" type="number" class="input-group__input" min="0" step="10" />
                        </div>
                        <div class="filtration-group filtration__button-wrapper">
                            <a href="#" class="button button--info">Search Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}