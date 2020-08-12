import React from 'react'

import FormGroup from '../../../components/Form/Inputs/FormGroup/FormGroup'
import RoundButton from '../../../components/Button/RoundButton/RoundButton'
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
                                <FormGroup
                                    modifiers='change-personal-data'
                                    formGroupModifiers='change-personal-data'
                                    id='changePersonalDataFirstName'
                                    name='changePersonalDataFirstName'
                                    type='text'
                                    title='first name'
                                    hasRoundButtons={true}
                                />
                                <FormGroup
                                    modifiers='change-personal-data'
                                    formGroupModifiers='change-personal-data'
                                    id='changePersonalDataEmail'
                                    name='changePersonalDataEmail'
                                    type='email'
                                    title='email'
                                    hasRoundButtons={true}
                                />
                                <FormGroup
                                    modifiers='change-personal-data'
                                    formGroupModifiers='change-personal-data'
                                    id='changePersonalDataCountry'
                                    name='changePersonalDataCountry'
                                    type='text'
                                    title='country'
                                    hasRoundButtons={true}
                                />
                                <FormGroup
                                    modifiers='change-personal-data'
                                    formGroupModifiers='change-personal-data'
                                    id='changePersonalDataAddress'
                                    name='changePersonalDataAddress'
                                    type='text'
                                    title='address'
                                    hasRoundButtons={true}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}