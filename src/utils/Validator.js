class Validator {
    static minLength = (val, errorMessage) => ({ type: 'MIN_LENGTH', value: val, errorMessage })
    static maxLength = (val, errorMessage) => ({ type: 'MAX_LENGTH', value: val, errorMessage })
    static isRequired = (errorMessage) => ({ type: 'IS_REQUIRED', errorMessage })
    static isTruthy = (errorMessage) => ({ type: 'IS_TRUTHY', errorMessage })
    static isEmail = (errorMessage) => ({ type: 'IS_EMAIL', errorMessage })
    static isGreaterThanZero = (errorMessage) => ({ type: 'IS_GREATER_THAN_ZERO', errorMessage })
    static isEqual = (value, errorMessage) => ({ type: 'IS_EQUAL', value, errorMessage })

    static validate = (validator, inputValue, equalValue, errors) => {
        const { type, value, errorMessage } = validator
        let isValid = true;

        if (type === 'IS_REQUIRED') isValid = isValid && inputValue.trim().length > 0
        if (type === 'IS_TRUTHY') isValid = isValid && inputValue === true
        if (type === 'IS_GREATER_THAN_ZERO') isValid = isValid && typeof inputValue === 'number' && inputValue > 0
        if (type === 'MIN_LENGTH') isValid = isValid && value <= inputValue.trim().length
        if (type === 'MAX_LENGTH') isValid = isValid && value >= inputValue.trim().length
        if (type === 'IS_EMAIL') isValid = isValid && /^\S+@\S+\.\S+$/.test(inputValue)
        if (type === 'IS_EQUAL') {
            isValid = isValid && inputValue === equalValue
        }

        if (!isValid) errors.push(errorMessage)
        return isValid
    }

    static validateAll = (validators, inputValue, equalValue) => {
        let errors = []

        let isValid = true;
        validators.forEach(validator => {
            isValid = this.validate(validator, inputValue, equalValue, errors) && isValid
        })

        return { isValid, errors }
    }
}

export default Validator;