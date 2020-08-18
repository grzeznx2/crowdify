import React, { useEffect } from 'react'

import FormGroup from '../../../components/Form/Inputs/FormGroup/FormGroup'
import RoundButton from '../../../components/Button/RoundButton/RoundButton'
import ChangePasswordForm from '../../../components/Form/Forms/ChangePasswordForm'
import ChangePersonalDataForm from '../../../components/Form/Forms/ChangePersonalDataForm'

export default function Profile({ changeTitle, ...props }) {

    useEffect(() => {
        changeTitle()
    }, [])

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
                        <ChangePersonalDataForm {...props} />
                    </div>
                </div>
            </div>
        </>
    )
}