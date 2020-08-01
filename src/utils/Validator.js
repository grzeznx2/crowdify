class Validator {
    static minLength = (val, errorMessage) => ({ type: 'MIN_LENGTH', value: val, errorMessage })
    static maxLength = (val, errorMessage) => ({ type: 'MAX_LENGTH', value: val, errorMessage })
    static isRequired = (errorMessage) => ({ type: 'IS_REQUIRED', errorMessage })
    static isEmail = (errorMessage) => ({ type: 'IS_EMAIL', errorMessage })
    static isGreaterThanZero = (errorMessage) => ({ type: 'IS_GREATER_THAN_ZERO', errorMessage })
    static areEqual = (value, value2, errorMessage) => ({ type: 'ARE_EQUAL', value, value2, errorMessage })

    static validate = (validator, inputValue, errorsArray) => {
        const { type, value, value2, errorMessage } = validator
        let isValid = true;

        if (type === 'IS_REQUIRED') isValid = isValid && inputValue.trim().length > 0
        if (type === 'IS_GREATER_THAN_ZERO') isValid = isValid && typeof inputValue === 'number' && inputValue > 0
        if (type === 'MIN_LENGTH') isValid = isValid && value <= inputValue.trim().length
        if (type === 'MAX_LENGTH') isValid = isValid && value >= inputValue.trim().length
        if (type === 'IS_EMAIL') isValid = isValid && /^\S+@\S+\.\S+$/.test(inputValue)
        if (type === 'ARE_EQUAL') {

            isValid = isValid && value === value2
        }

        if (!isValid) errorsArray.push(errorMessage)
        return isValid
    }

    static validateAll = (validators, inputValue, errorsArray) => {

        let isValid = true;
        validators.forEach(validator => {
            isValid = this.validate(validator, inputValue, errorsArray) && isValid
        })

        return isValid
    }
}

export default Validator;