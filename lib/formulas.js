export const getSIP = (amount, rate, tenure) => {
    if (!amount || !rate || !tenure) {
        throw new Error('all arguments required');
    }
    if (typeof amount !== 'number' && typeof rate !== 'number' || typeof tenure !== 'number') {
        throw new Error('all arguments should be numeric');
    }
    const monthlyRate = rate / 12 / 100
    const invested = amount * tenure * 12
    const maturity = Math.round(amount * (Math.pow(1 + monthlyRate, tenure * 12) - 1) / monthlyRate * (1 + monthlyRate))
    return { invested, maturity }
}

export const getLumpsum = (amount, rate, tenure) => {
    if (!amount || !rate || !tenure) {
        throw new Error('all arguments required');
    }
    if (typeof amount !== 'number' && typeof rate !== 'number' || typeof tenure !== 'number') {
        throw new Error('all arguments should be numeric');
    }
    const maturity = Math.round(amount * Math.pow((1 + (rate / 100)), tenure))
    return { invested: amount, maturity }
}

export const getFD = (amount, rate, tenure) => {
    const maturity = amount + (amount * rate * (tenure / 100))
    return { invested: amount, maturity }
}

export const getPPF = (P, i, n) => {
    i = i / 100;
    const F = P * ((Math.pow(1 + i, n) - 1) / i);
    return F;
}

export const getSSY = (amount, tenure, rate) => {
    let ob = 0;
    for (let i = 0; i < tenure; i++) {
        const A = ob + amount;
        const interest = Math.round((A * rate) / 100)
        ob = A + interest;
    }
    return ob;
}