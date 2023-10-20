const en = {
    title: "Investment | FinChamp",
    types: [{
        title: 'Fixed Deposits',
        excerpt: 'Fixed Deposits (FDs) in India offer a secure, fixed interest rate for a chosen tenure, with options for premature withdrawal and various interest payout frequencies. They are insured up to Rs. 5 lakhs per bank by the DICGC, and some banks provide higher interest rates to senior citizens.',
        pros: ['Low risk', 'Guaranteed returns', 'Liquidity'],
        cons: ['Lower returns', 'Taxation']
    }, {
        title: 'Mutual Funds',
        excerpt: 'Mutual funds in India are investment vehicles that pool money from multiple investors to invest in a diversified portfolio of assets. They offer diversification, professional management, and various fund types to suit different risk profiles and financial goals, making them a popular choice for investors seeking long-term wealth creation.',
        pros: ['Professional management', 'Diversification', 'Liquidity'],
        cons: ['Market risk', 'Fees']
    }, {
        title: 'Stock Market',
        excerpt: 'The stock market is a platform where shares of publicly traded companies are bought and sold, offering investors the potential for capital appreciation through the purchase of stocks.',
        pros: ['High returns potential', 'Liquidity', 'Dividends'],
        cons: ['High risk', 'Lack of expertise']
    }, {
        title: 'Real Estate',
        excerpt: 'Real estate investment involves purchasing properties like homes, commercial spaces, or land, with the aim of capital appreciation and rental income, offering stability and long-term growth potential.',
        pros: ['Tangible asset', 'Rental income', 'Potential for appreciation'],
        cons: ['Illiquid', 'High initial cost', 'Maintenance and taxes']
    }, {
        title: 'Gold',
        excerpt: 'Gold serves as a traditional safe-haven asset and a hedge against inflation, offering stability during economic uncertainties and a means of preserving wealth.',
        pros: ['Safe haven', 'Liquidity', 'Jewelry and ornamental value'],
        cons: ['Lack of income', 'Storage and security']
    }, {
        title: 'Public Provident Fund',
        excerpt: 'PPF is a government-backed savings scheme in India, providing tax benefits and a fixed interest rate, catering to long-term financial goals and retirement planning.',
        pros: ['Tax benefits', 'Long-term savings', 'Government-backed'],
        cons: ['Lock-in period', 'Lower returns']
    }, {
        title: 'Bonds and Debentures',
        excerpt: 'Bonds and debentures are fixed-income securities where investors lend money to entities in exchange for periodic interest payments and the return of the principal amount upon maturity.',
        pros: ['Fixed income', 'Relatively lower risk', 'Diversification'],
        cons: ['Interest rate risk', 'Credit risk']
    }, {
        title: 'Systematic Investment Plan',
        excerpt: 'SIP is a disciplined way to invest in mutual funds, allowing investors to contribute regular, smaller amounts over time, benefiting from rupee-cost averaging and the power of compounding for long-term wealth accumulation.',
        pros: ['Affordable', 'Rupee cost averaging', 'Disciplined savings'],
        cons: ['Market risk', 'Long-term commitment']
    }]
}
const gu = {
    title: "ઈનવેસ્ટમેન્ટ | FinChamp",
    types: [{
        title: 'Fixed Deposits',
        pros: ['Low risk', 'Guaranteed returns', 'Liquidity'],
        cons: ['Lower returns', 'Taxation']
    }, {
        title: 'Mutual Funds',
        pros: ['Professional management', 'Diversification', 'Liquidity'],
        cons: ['Market risk', 'Fees']
    }, {
        title: 'Stock Market',
        pros: ['High returns potential', 'Liquidity', 'Dividends'],
        cons: ['High risk', 'Lack of expertise']
    }, {
        title: 'Real Estate',
        pros: ['Tangible asset', 'Rental income', 'Potential for appreciation'],
        cons: ['Illiquid', 'High initial cost', 'Maintenance and taxes']
    }, {
        title: 'Gold',
        pros: ['Safe haven', 'Liquidity', 'Jewelry and ornamental value'],
        cons: ['Lack of income', 'Storage and security']
    }, {
        title: 'Public Provident Fund',
        pros: ['Tax benefits', 'Long-term savings', 'Government-backed'],
        cons: ['Lock-in period', 'Lower returns']
    }, {
        title: 'Bonds and Debentures',
        pros: ['Fixed income', 'Relatively lower risk', 'Diversification'],
        cons: ['Interest rate risk', 'Credit risk']
    }, {
        title: 'Systematic Investment Plan',
        pros: ['Affordable', 'Rupee cost averaging', 'Disciplined savings'],
        cons: ['Market risk', 'Long-term commitment']
    }]
}

export default async function handler(req, res) {
    const { locale } = req.query
    const option = {
        'gu': gu,
        'en': en
    }
    res.status(200).json(option[locale || 'en'])
}


// 1. Fixed Deposits (FDs):

// Pros:

// Low risk: FDs are considered one of the safest investment options.
// Guaranteed returns: You know the interest rate and maturity amount upfront.
// Liquidity: FDs can be broken before maturity, albeit with a penalty.
// Cons:

// Lower returns: The returns are generally lower compared to other investment options.
// Taxation: Interest earned on FDs is taxable, which can reduce overall returns.
// 2. Mutual Funds:

// Pros:

// Professional management: Managed by experienced fund managers.
// Diversification: Invest in a variety of assets to spread risk.
// Liquidity: Easy to buy and sell units.
// Cons:

// Market risk: Returns are subject to market fluctuations.
// Fees: Mutual funds charge management fees and expenses.
// 3. Stock Market:

// Pros:
// High returns potential: Stocks have the potential for significant capital appreciation.
// Liquidity: Easy to buy and sell stocks.
// Dividends: Some stocks offer dividend income.
// Cons:

// High risk: Stock prices can be volatile, leading to potential losses.
// Lack of expertise: Requires knowledge and research to make informed decisions.
// 4. Real Estate:

// Pros:

// Tangible asset: Real estate provides physical ownership.
// Rental income: Can generate regular rental income.
// Potential for appreciation: Property values may increase over time.
// Cons:

// Illiquid: Buying and selling property can be time-consuming.
// High initial cost: Requires significant upfront investment.
// Maintenance and taxes: Ongoing expenses for maintenance and property taxes.


// 5. Gold:

// Pros:

// Safe haven: Gold is often seen as a hedge against economic instability.
// Liquidity: Easy to buy and sell gold in various forms.
// Jewelry and ornamental value: Can be used for personal adornment.
// Cons:

// Lack of income: Gold does not generate regular income like dividends or interest.
// Storage and security: Costs associated with storing and securing physical gold.

// 6. Public Provident Fund (PPF):

// Pros:

// Tax benefits: PPF offers tax deductions under Section 80C.
// Long-term savings: Encourages disciplined, long-term saving.
// Government-backed: PPF is a government-supported scheme.
// Cons:

// Lock-in period: Funds are locked in for 15 years with limited withdrawal options.
// Lower returns: PPF interest rates may be lower than other options.

// 7. Bonds and Debentures:

// Pros:

// Fixed income: Provide regular interest payments.
// Relatively lower risk: Government bonds are considered safe.
// Diversification: Corporate bonds offer diversification beyond stocks.
// Cons:

// Interest rate risk: Bond prices may fall if interest rates rise.
// Credit risk: Corporate bonds carry the risk of issuer default.


// 8. Systematic Investment Plan (SIP):

// Pros:

// Affordable: Allows for small, regular investments.
// Rupee cost averaging: Reduces the impact of market volatility.
// Disciplined savings: Encourages regular saving habits.
// Cons:

// Market risk: SIP returns are subject to market fluctuations.
// Long-term commitment: Ideally suited for long-term investors.


