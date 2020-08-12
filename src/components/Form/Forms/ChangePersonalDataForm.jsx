import React from 'react'

import Form from './Form'

export default function ChangePersonalDataForm() {

    return (
        <Form
            name='changePersonalData'
            containerModifiers='change-personal-data'
            hasRoundButtons={true}
            buttonWrapperModifiers='change-password' />
    )
}