import React from 'react'

import Modal from '../Modal'

export default function AddFundsModal({ isModalOpen, handleClick }) {
    return (
        <Modal
            isModalOpen={isModalOpen}
            handleClick={handleClick}
            title='Add funds to your account'
            outerContainerModifiers='bg-blue'
            contentModifiers='center'
        >
            <form action="#" class="form">
                <div class="form__container form__container--center-content">
                    <div class="input-group input-group--column input-group--on-dark-bg">
                        <label for="withdraw-from-investment" class="input-group__label">Amount you would like to
                           withdraw:</label>
                        <input type="number" id='withdraw-from-investment'
                            class="input-group__input input-group__input--modal" />
                        <span class="input-group__additional-info">od 1025$ invested.</span>
                    </div>
                </div>
                <div class="form__buttons-wrapper">
                    <button class="button button--secondary">Cancel</button>
                    <button class="button button--secondary">Withdraw</button>
                </div>
            </form>
        </Modal>
    )
}