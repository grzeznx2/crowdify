import Validator from '../../../../utils/Validator'

export const subscribeInputs = {
    subscribeName: {
        title: 'name',
        id: 'subscribeName',
        name: 'subscribeName',
        type: 'text',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isRequired('Name is required')],
        errors: [],
        modifiers: 'column'
    },
    subscribeEmail: {
        title: 'email',
        id: 'subscribeEmail',
        name: 'subscribeEmail',
        type: 'email',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isEmail('Please provide valid email')],
        errors: [],
        modifiers: 'column'
    },
}

export const registerInputs = {
    registerFirstName: {
        title: 'first name',
        id: 'registerFirstName',
        name: 'registerFirstName',
        type: 'text',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isRequired('Name is required')],
        errors: [],
        modifiers: 'column'
    },
    registerLastName: {
        title: 'last name',
        id: 'registerLastName',
        name: 'registerLastName',
        type: 'text',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isRequired('Name is required')],
        errors: [],
        modifiers: 'column'
    },
    registerEmail: {
        title: 'email',
        id: 'registerEmail',
        name: 'registerEmail',
        type: 'email',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isEmail('Please provide valid email')],
        errors: [],
        modifiers: 'column'
    },
    registerPassword: {
        title: 'password',
        id: 'registerPassword',
        name: 'registerPassword',
        type: 'password',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.minLength(8, 'Password must contain at least 8 characters')],
        errors: [],
        modifiers: 'column'
    },
    registerPasswordConfirm: {
        title: 'confirm password',
        id: 'registerPasswordConfirm',
        name: 'registerPasswordConfirm',
        type: 'password',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.minLength(8, 'Password must contain at least 8 characters'),
        Validator.isEqual('registerPassword', 'Passwords must be identical')],
        errors: [],
        modifiers: 'column'
    },
    registerAgreeTerms: {
        title: 'I agree to the terms',
        id: 'registerAgreeTerms',
        name: 'registerAgreeTerms',
        type: 'checkbox',
        value: false,
        isValid: false,
        isTouched: false,
        validators: [Validator.isTruthy('You have to agree to the terms to register')],
        errors: [],
        modifiers: 'column'
    },
}

export const loginInputs = {
    loginEmail: {
        title: 'email',
        id: 'loginEmail',
        name: 'loginEmail',
        type: 'email',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isEmail('Please provide a valid email')],
        errors: [],
        modifiers: 'column'
    },
    loginPassword: {
        title: 'password',
        id: 'loginPassword',
        name: 'loginPassword',
        type: 'password',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.minLength(8, 'Password must contain at least 8 characters')],
        errors: [],
        modifiers: 'column'
    },
}

export const changePasswordInputs = {
    changePasswordCurrent: {
        title: 'current password',
        id: 'changePasswordCurrent',
        name: 'changePasswordCurrent',
        type: 'password',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.minLength(8, 'Password must contain at least 8 characters')],
        errors: [],
        modifiers: 'column'
    },
    changePassword: {
        title: 'password',
        id: 'changePassword',
        name: 'changePassword',
        type: 'password',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.minLength(8, 'Password must contain at least 8 characters')],
        errors: [],
        modifiers: 'column'
    },
    changePasswordConfirm: {
        title: 'confirm password',
        id: 'changePasswordConfirm',
        name: 'changePasswordConfirm',
        type: 'password',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.minLength(8, 'Password must contain at least 8 characters'),
        Validator.isEqual('changePassword', 'Passwords must be identical')],
        errors: [],
        modifiers: 'column'
    },
}

export const changePersonalDataInputs = {
    changePersonalDataFirstName: {
        title: 'first name',
        id: 'changePersonalDataFirstName',
        name: 'changePersonalDataFirstName',
        type: 'text',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isRequired(8, 'Please provide first name')],
        errors: [],
        modifiers: 'change-personal-data'
    },
    changePersonalDataLastName: {
        title: 'last name',
        id: 'changePersonalDataLastName',
        name: 'changePersonalDataLastName',
        type: 'text',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isRequired(8, 'Please provide last name')],
        errors: [],
        modifiers: 'change-personal-data'
    },
    changePersonalDataEmail: {
        title: 'email',
        id: 'changePersonalDataEmail',
        name: 'changePersonalDataEmail',
        type: 'email',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isEmail('Please provide a valid email')],
        errors: [],
        modifiers: 'change-personal-data'
    },
    changePersonalDataCountry: {
        title: 'country',
        id: 'changePersonalDataCountry',
        name: 'changePersonalDataCountry',
        type: 'text',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isCountry('Please provide a valid country')],
        errors: [],
        modifiers: 'change-personal-data'
    },
    changePersonalDataCity: {
        title: 'city',
        id: 'changePersonalDataCity',
        name: 'changePersonalDataCity',
        type: 'text',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isRequired('Please provide a city')],
        errors: [],
        modifiers: 'change-personal-data'
    },
    changePersonalDataPostalCode: {
        title: 'postal code',
        id: 'changePersonalDataPostalCode',
        name: 'changePersonalDataPostalCode',
        type: 'text',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isPostalCode('Required format: XX-XXX')],
        errors: [],
        modifiers: 'change-personal-data'
    },
    changePersonalDataPhone: {
        title: 'phone number',
        id: 'changePersonalDataPhone',
        name: 'changePersonalDataPhone',
        type: 'text',
        value: '',
        isValid: false,
        isTouched: false,
        validators: [Validator.isPhone('Phone number must contain 9 digits')],
        errors: [],
        modifiers: 'change-personal-data'
    },
}