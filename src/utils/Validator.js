const countries = { "afghanistan": true, "albania": true, "algeria": true, "andorra": true, "angola": true, "anguilla": true, "antigua &amp; barbuda": true, "argentina": true, "armenia": true, "aruba": true, "australia": true, "austria": true, "azerbaijan": true, "bahamas": true, "bahrain": true, "bangladesh": true, "barbados": true, "belarus": true, "belgium": true, "belize": true, "benin": true, "bermuda": true, "bhutan": true, "bolivia": true, "bosnia &amp; herzegovina": true, "botswana": true, "brazil": true, "british virgin islands": true, "brunei": true, "bulgaria": true, "burkina faso": true, "burundi": true, "cambodia": true, "cameroon": true, "cape verde": true, "cayman islands": true, "chad": true, "chile": true, "china": true, "colombia": true, "congo": true, "cook islands": true, "costa rica": true, "cote d ivoire": true, "croatia": true, "cruise ship": true, "cuba": true, "cyprus": true, "czech republic": true, "denmark": true, "djibouti": true, "dominica": true, "dominican republic": true, "ecuador": true, "egypt": true, "el salvador": true, "equatorial guinea": true, "estonia": true, "ethiopia": true, "falkland islands": true, "faroe islands": true, "fiji": true, "finland": true, "france": true, "french polynesia": true, "french west indies": true, "gabon": true, "gambia": true, "georgia": true, "germany": true, "ghana": true, "gibraltar": true, "greece": true, "greenland": true, "grenada": true, "guam": true, "guatemala": true, "guernsey": true, "guinea": true, "guinea bissau": true, "guyana": true, "haiti": true, "honduras": true, "hong kong": true, "hungary": true, "iceland": true, "india": true, "indonesia": true, "iran": true, "iraq": true, "ireland": true, "isle of man": true, "israel": true, "italy": true, "jamaica": true, "japan": true, "jersey": true, "jordan": true, "kazakhstan": true, "kenya": true, "kuwait": true, "kyrgyz republic": true, "laos": true, "latvia": true, "lebanon": true, "lesotho": true, "liberia": true, "libya": true, "liechtenstein": true, "lithuania": true, "luxembourg": true, "macau": true, "macedonia": true, "madagascar": true, "malawi": true, "malaysia": true, "maldives": true, "mali": true, "malta": true, "mauritania": true, "mauritius": true, "mexico": true, "moldova": true, "monaco": true, "mongolia": true, "montenegro": true, "montserrat": true, "morocco": true, "mozambique": true, "namibia": true, "nepal": true, "netherlands": true, "netherlands antilles": true, "new caledonia": true, "new zealand": true, "nicaragua": true, "niger": true, "nigeria": true, "norway": true, "oman": true, "pakistan": true, "palestine": true, "panama": true, "papua new guinea": true, "paraguay": true, "peru": true, "philippines": true, "poland": true, "portugal": true, "puerto rico": true, "qatar": true, "reunion": true, "romania": true, "russia": true, "rwanda": true, "saint pierre &amp; miquelon": true, "samoa": true, "san marino": true, "satellite": true, "saudi arabia": true, "senegal": true, "serbia": true, "seychelles": true, "sierra leone": true, "singapore": true, "slovakia": true, "slovenia": true, "south africa": true, "south korea": true, "spain": true, "sri lanka": true, "st kitts &amp; nevis": true, "st lucia": true, "st vincent": true, "st. lucia": true, "sudan": true, "suriname": true, "swaziland": true, "sweden": true, "switzerland": true, "syria": true, "taiwan": true, "tajikistan": true, "tanzania": true, "thailand": true, "timor l'este": true, "togo": true, "tonga": true, "trinidad &amp; tobago": true, "tunisia": true, "turkey": true, "turkmenistan": true, "turks &amp; caicos": true, "uganda": true, "ukraine": true, "united arab emirates": true, "united kingdom": true, "uruguay": true, "uzbekistan": true, "venezuela": true, "vietnam": true, "virgin islands (us)": true, "yemen": true, "zambia": true, "zimbabwe": true }

class Validator {
    static minLength = (val, errorMessage) => ({ type: 'MIN_LENGTH', value: val, errorMessage })
    static maxLength = (val, errorMessage) => ({ type: 'MAX_LENGTH', value: val, errorMessage })
    static isRequired = (errorMessage) => ({ type: 'IS_REQUIRED', errorMessage })
    static isTruthy = (errorMessage) => ({ type: 'IS_TRUTHY', errorMessage })
    static isEmail = (errorMessage) => ({ type: 'IS_EMAIL', errorMessage })
    static isCountry = (errorMessage) => ({ type: 'IS_COUNTRY', errorMessage })
    static isPostalCode = (errorMessage) => ({ type: 'IS_POSTAL_CODE', errorMessage })
    static isPhone = (errorMessage) => ({ type: 'IS_PHONE', errorMessage })
    static isGreaterThanZero = (errorMessage) => ({ type: 'IS_GREATER_THAN_ZERO', errorMessage })
    static isEqual = (value, errorMessage) => ({ type: 'IS_EQUAL', value, errorMessage })

    static validate(validator, inputValue, equalValue, errors) {
        const { type, value, errorMessage } = validator
        let isValid = true;

        if (type === 'IS_REQUIRED') isValid = isValid && inputValue.trim().length > 0
        if (type === 'IS_TRUTHY') isValid = isValid && inputValue === true
        if (type === 'IS_GREATER_THAN_ZERO') isValid = isValid && +inputValue > 0
        if (type === 'MIN_LENGTH') isValid = isValid && value <= inputValue.trim().length
        if (type === 'MAX_LENGTH') isValid = isValid && value >= inputValue.trim().length
        if (type === 'IS_EMAIL') isValid = isValid && /^\S+@\S+\.\S+$/.test(inputValue)
        if (type === 'IS_COUNTRY') isValid = isValid && countries[inputValue.trim().toLowerCase()]
        if (type === 'IS_POSTAL_CODE') isValid = isValid && inputValue.trim().length === 6 && /\d{2}-\d{3}/.test(inputValue.trim())
        if (type === 'IS_PHONE') isValid = isValid && inputValue.replace(' ', '').length === 9 && /\d{9}/.test(inputValue.replace(' ', ''))
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