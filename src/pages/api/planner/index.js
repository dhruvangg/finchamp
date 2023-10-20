const income = ["Salary", "Awards", "Sale", "Rental", "Refunds", "Coupons", "Lottery", "Dividends", "Investments", "Others", "Blessings", "Freelance"]
const expense = ["Food", "Bills", "Transportation", "Home", "Car", "Shopping", "Clothing", "Baby"]

export default function handler(req, res) {
    res.status(200).json({ income, expense })
}
