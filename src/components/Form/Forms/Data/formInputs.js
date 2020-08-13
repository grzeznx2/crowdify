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
        name: 'firstName',
        type: 'text',
        value: 'Adam',
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
        value: 'Bochen',
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
        value: 'adam@gmail.com',
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