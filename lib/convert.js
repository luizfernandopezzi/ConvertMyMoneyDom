const convertBrlToUsd = (exchangeRate, amount) => {
    return amount/exchangeRate
}

const convertUsdToBrl = (exchangeRate, amount) => {
    return amount*exchangeRate
}

const toCurrency = (locale,currency,value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    }).format(value)
    return formattedValue
    }

const toMoney = (value) => {
    return parseFloat(value).toFixed(2).replace('.',',')
}

module.exports = {
    convertBrlToUsd,
    convertUsdToBrl,
    toMoney,
    toCurrency
}