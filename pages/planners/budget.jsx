import React, { Component } from 'react'
import Head from "next/head";
import { Container, Layout, Page, PageTitle } from 'components/styled';
import { Breadcrumbs } from 'components/common';
import dayjs from 'dayjs';
import { toInr } from 'lib';

export default class budget extends Component {
    constructor(props) {
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        super(props)
        this.state = {
            income: 100000,
            emi: 10000,
            investment: 10000,
            medical: 5000,
            expenses: 50000,
            start: `${currentMonth > 3 ? currentYear : currentYear - 1}-04`,
            end: `${currentMonth > 3 ? currentYear + 1 : currentYear}-03`,
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