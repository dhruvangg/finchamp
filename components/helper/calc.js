/* eslint-disable no-extra-parens */

export const getSIP = (amount, rate, tenure) => {
    const monthlyRate = rate / 12 / 100
    const invested = amount * tenure * 12
    const maturity = Math.round(amount * (Math.pow(1 + monthlyRate, tenure * 12) - 1) / monthlyRate * (1 + monthlyRate))
    return { invested, maturity }
}

export const getLumpsum = (amount, rate, tenure) => {
    const maturity = Math.round(amount * Math.pow((1 + (rate / 100)), tenure))
    return { invested: amount, maturity }
}

export const getFD = (amount, rate, tenure) => {
    const maturity = amount + (amount * rate * (tenure / 100))
    return { invested: amount, maturity }
}
