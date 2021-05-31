const convert = require('./convert')

test('Convert 4 to 4', () => {
    expect(convert.convertBrlToUsd(4,4)).toBe(1)
})

test('toMoney converts float', () => {
    expect(convert.toCurrency("en-US","USD",2)).toBe('$2.00')
})

test('toMoney converts string', () => {
    expect(convert.toMoney('2')).toBe('2,00')
})