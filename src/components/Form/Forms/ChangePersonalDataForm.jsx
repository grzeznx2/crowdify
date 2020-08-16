import React from 'react'

import Validator from '../../../utils/Validator'

import Form from './Form'

export default function ChangePersonalDataForm({ user }) {
    const inputs = {
        changePersonalDataFirstName: {
            title: 'first name',
            id: 'changePersonalDataFirstName',
            name: 'firstName',
            type: 'text',
            value: user.firstName,
            isValid: true,
            isTouched: false,
            hasRoundButtons: true,
            isBeingEdited: false,
            requiresEditStatus: true,
            validators: [Validator.isRequired('Please provide first name')],
            errors: [],
            modifiers: 'column change-personal-data'
        },
        changePersonalDataLastName: {
            title: 'last name',
            id: 'changePersonalDataLastName',
            name: 'lastName',
            type: 'text',
            value: user.lastName,
            isValid: true,
            isTouched: false,
            hasRoundButtons: true,
            isBeingEdited: false,
            requiresEditStatus: true,
            validators: [Validator.isRequired('Please provide last name')],
            errors: [],
            modifiers: 'column change-personal-data'
        },
        changePersonalDataEmail: {
            title: 'email',
            id: 'changePersonalDataEmail',
            name: 'email',
            type: 'email',
            value: user.email,
            isValid: true,
            isTouched: false,
            hasRoundButtons: true,
            isBeingEdited: false,
            requiresEditStatus: true,
            validators: [Validator.isEmail('Please provide a valid email')],
            errors: [],
            modifiers: 'column change-personal-data'
        },
        changePersonalDataCountry: {
            title: 'country',
            id: 'changePersonalDataCountry',
            name: 'country',
            type: 'text',
            value: 'Poland',
            isValid: true,
            isTouched: false,
            hasRoundButtons: true,
            isBeingEdited: false,
            requiresEditStatus: true,
            validators: [Validator.isCountry('Please provide a valid country')],
            errors: [],
            modifiers: 'column change-personal-data'
        },
        changePersonalDataCity: {
            title: 'city',
            id: 'changePersonalDataCity',
            name: 'city',
            type: 'text',
            value: 'Malbork',
            isValid: true,
            isTouched: false,
            hasRoundButtons: true,
            isBeingEdited: false,
            requiresEditStatus: true,
            validators: [Validator.isRequired('Please provide a city')],
            errors: [],
            modifiers: 'column change-personal-data'
        },
        changePersonalDataPostalCode: {
            title: 'postal code',
            id: 'changePersonalDataPostalCode',
            name: 'postalCode',
            type: 'text',
            value: '21-245',
            isValid: true,
            isTouched: false,
            hasRoundButtons: true,
            isBeingEdited: false,
            requiresEditStatus: true,
            validators: [Validator.isPostalCode('Required format: XX-XXX')],
            errors: [],
            modifiers: 'column change-personal-data'
        },
        changePersonalDataPhone: {
            title: 'phone',
            id: 'changePersonalDataPhone',
            name: 'phone',
            type: 'text',
            value: '821894231',
            isValid: true,
            isTouched: false,
            hasRoundButtons: true,
            isBeingEdited: false,
            requiresEditStatus: true,
            validators: [Validator.isPhone('Phone number must contain 9 digits')],
            errors: [],
            modifiers: 'column change-personal-data'
        },
    }

    return (
        <Form
            formInputs={inputs}
            name='changePersonalData'
            containerModifiers='change-personal-data'
            buttonWrapperModifiers='change-password' />
    )
}