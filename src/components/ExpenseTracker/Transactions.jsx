import { toDate, toDateDay } from "@/lib"
import { useSelector } from "react-redux"

export default function Transactions() {
    const { transaction } = useSelector(state => state)
    const groups = transaction.sort((a, b) => b.time - a.time).reduce((groups, game) => {
        const date = toDate(game.time);
        if (!groups[date]) groups[date] = [];
        groups[date].push(game);
        return groups;
    }, {});

    const groupByDate = Object.keys(groups).map((date) => {
        return {
            date,
            transactions: groups[date]
        };
    });
    return (
        <>
            <table className="shadow-sm rounded-lg border-collapse table-auto w-full text-sm mt-8 border border-slate-100 rounded-lg">
                <tbody>
                    {
                        groupByDate.map(el => {
                            const { date, transactions } = el
                            return <>
                                <tr className="text-sm font-semibold">
                                    <td className="border-b border-slate-100 p-2 px-4 text-primary">{toDateDay(date)}</td>
                                    <td className="border-b border-slate-100 p-2 px-4 text-primary text-right">
                                        <span>Income: {transactions.reduce((acc, curr) => curr.type === "income" ? acc + curr.amount : acc, 0)}</span>
                                        <span className="pl-4">Expense: {transactions.reduce((acc, curr) => curr.type === "expense" ? acc + curr.amount : acc, 0)}</span>
                                    </td>
                                </tr>
                                <tr className="text-sm">
                                    <td className="border-b border-slate-100 text-gray-800 p-2 px-4" colSpan={2}>
                                        <ul>
                                            {transactions.map(transaction => {
                                                const { type, time, category, amount } = transaction
                                                return <li className="flex justify-between py-2" key={time}>
                                                    <span>{category}</span>
                                                    <span>{type === "expense" && '- '}{amount}</span>
                                                </li>
                                            })}
                                        </ul>
                                    </td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
            {/* <table className="shadow-sm rounded-lg border-collapse table-auto w-full text-sm mt-8 border border-slate-100 rounded-lg">
                <thead>
                    <tr>
                        <th className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Category</th>
                        <th className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Amount</th>
                        <th className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transaction.map(el => {
                        const { type, category, amount, time } = el
                        return <tr key={time} className={`${type === 'income' ? 'text-green-700' : 'text-red-700'}`}>
                            <td className={`border-b border-slate-100 p-4 pl-8`}>{category} </td>
                            <td className={`border-b border-slate-100 p-4 pl-8`}>{toInr(amount)}</td>
                            <td className={`border-b border-slate-100 p-4 pl-8`}>{toDateTime(time)}</td>
                        </tr>
                    })}
                </tbody>
            </table> */}
        </>
    )
}
