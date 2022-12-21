import React, { Component } from 'react'
import Head from "next/head";
import { Container, Layout, Page, PageTitle } from 'components/styled';
import { Breadcrumbs } from 'components/common';
import { toInr } from 'components/helper';
import dayjs from 'dayjs';
import ReactToPrint from 'react-to-print';

export default class budget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            income: 100000,
            emi: 8523,
            investment: 10000,
            medical: 5000,
            expenses: 50000,
            start: '2022-04',
            end: '2023-03',
            months: []
        }
        this.months = []
        this.handleChange = this.handleChange.bind(this)
        this.getMonths = this.getMonths.bind(this)

        this.tableRef = React.createRef();
    }

    componentDidMount() {
        this.getMonths(this.state.start)
    }


    handleChange = e => {
        const { name, value, type } = e.target
        this.setState({
            [name]: type === 'number' ? Number(value) : value,
            months: []
        }, () => {
            this.getMonths(this.state.start)
        })
    }

    getMonths(start) {
        const { end } = this.state
        const newMonth = dayjs(start).format('MMMM YYYY')
        this.setState(prevState => {
            return {
                ...prevState,
                months: [...prevState.months, newMonth]
            }
        })
        if (dayjs(end).format('MMMM YYYY') !== newMonth) {
            this.getMonths(dayjs(start).add(1, 'month').format('YYYY-MM'))
        }
    }

    render() {
        const { income, expenses, emi, investment, months, medical } = this.state
        return (
            <Layout>
                <Head>
                    <title>Planner - FinChamp</title>
                    <meta name="description" content="Financial Awareness platform" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Page>
                    <Container>
                        <Breadcrumbs />
                        <div className="flex items-start justify-between">
                            <PageTitle>Budget Planner</PageTitle>
                            <div>
                                <ReactToPrint trigger={() => <a href="#" className="flex items-center justify-center ml-auto w-24 bg-gray-100 p-2 rounded-lg" onClick={e => e.preventDefault()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2">
                                        <path fillRule="evenodd" d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.046.752.097 1.126.153A2.212 2.212 0 0118 8.653v4.097A2.25 2.25 0 0115.75 15h-.241l.305 1.984A1.75 1.75 0 0114.084 19H5.915a1.75 1.75 0 01-1.73-2.016L4.492 15H4.25A2.25 2.25 0 012 12.75V8.653c0-1.082.775-2.034 1.874-2.198.374-.056.75-.107 1.127-.153L5 6.25v-3.5zm8.5 3.397a41.533 41.533 0 00-7 0V2.75a.25.25 0 01.25-.25h6.5a.25.25 0 01.25.25v3.397zM6.608 12.5a.25.25 0 00-.247.212l-.693 4.5a.25.25 0 00.247.288h8.17a.25.25 0 00.246-.288l-.692-4.5a.25.25 0 00-.247-.212H6.608z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">Print</span>
                                </a>} content={() => this.tableRef.current} />
                            </div>
                        </div>

                        <div ref={this.tableRef} className="print:p-4">
                            <div className="grid grid-cols-5 gap-8 mb-8">
                                <div className='flex flex-col'>
                                    <label className="form-label inline-block mb-2 text-gray-700" htmlFor="income">Income (Monthly)</label>
                                    <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="income" step="100" defaultValue={this.state.income} onChange={this.handleChange} />
                                </div>
                                <div className='flex flex-col'>
                                    <label className="form-label inline-block mb-2 text-gray-700" htmlFor="emi">Expenses</label>
                                    <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="expenses" step="100" defaultValue={this.state.expenses} onChange={this.handleChange} />
                                </div>
                                <div className='flex flex-col'>
                                    <label className="form-label inline-block mb-2 text-gray-700" htmlFor="emi">EMI</label>
                                    <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="emi" step="100" defaultValue={this.state.emi} onChange={this.handleChange} />
                                </div>
                                <div className='flex flex-col'>
                                    <label className="form-label inline-block mb-2 text-gray-700" htmlFor="emi">Investment</label>
                                    <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="investment" step="100" defaultValue={this.state.investment} onChange={this.handleChange} />
                                </div>
                                <div className='flex flex-col'>
                                    <label className="form-label inline-block mb-2 text-gray-700" htmlFor="emi">Medical</label>
                                    <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="medical" step="100" defaultValue={this.state.medical} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div className='flex flex-col'>
                                    <label className="form-label inline-block mb-2 text-gray-700" htmlFor="start_month">Start Month</label>
                                    <input type="month" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="start" defaultValue={this.state.start} onChange={this.handleChange} />
                                </div>
                                <div className='flex flex-col'>
                                    <label className="form-label inline-block mb-2 text-gray-700" htmlFor="end_month">End Month</label>
                                    <input type="month" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="end" defaultValue={this.state.end} onChange={this.handleChange} />
                                </div>
                            </div>
                            <table className="min-w-full border text-right" >
                                <thead>
                                    <tr>
                                        <th className="text-sm font-bold text-gray-900 px-6 py-4 text-center">Month</th>
                                        <th className="text-sm font-bold text-gray-900 px-6 py-4 text-center">Income</th>
                                        <th className="text-sm font-bold text-gray-900 px-6 py-4 text-center">Expenses</th>
                                        <th className="text-sm font-bold text-gray-900 px-6 py-4 text-center">EMI</th>
                                        <th className="text-sm font-bold text-gray-900 px-6 py-4 text-center">Investment</th>
                                        <th className="text-sm font-bold text-gray-900 px-6 py-4 text-center">Medical</th>
                                    </tr>
                                </thead>
                                <tbody className="border">
                                    {this.state.months.map((el, i) => {
                                        return <tr key={i}>
                                            <td scope="col" className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r text-center">{el}</td>
                                            <td scope="col" className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r">{toInr(income)}</td>
                                            <td scope="col" className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r">{toInr(expenses)}</td>
                                            <td scope="col" className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r">{toInr(emi)}</td>
                                            <td scope="col" className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r">{toInr(investment)}</td>
                                            <td scope="col" className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r">{toInr(medical)}</td>
                                        </tr>
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th className="text-sm font-bold text-gray-900 px-6 py-4 text-center">Total</th>
                                        <th className="text-sm font-bold text-gray-900 px-6 py-4">{toInr(income * months.length)}</th>
                                        <th className="text-sm font-bold text-gray-900 px-6 py-4">{toInr(expenses * months.length)}</th>
                                        <th className="text-sm font-bold text-gray-900 px-6 py-4">{toInr(emi * months.length)}</th>
                                        <th className="text-sm font-bold text-gray-900 px-6 py-4">{toInr(investment * months.length)}</th>
                                        <th className="text-sm font-bold text-gray-900 px-6 py-4">{toInr(medical * months.length)}</th>
                                    </tr>
                                    <tr className='border-t'>
                                        <th colSpan={5} className="text-sm font-bold text-gray-900 px-6 py-4">Balance</th>
                                        <th className="text-sm font-bold text-gray-900 px-6 py-4">{toInr(income * months.length - (expenses + emi + investment + medical) * months.length)}</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </Container>
                </Page>
            </Layout >
        )
    }
}