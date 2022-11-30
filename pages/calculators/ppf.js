import React, { Component } from 'react'
import Head from "next/head";
import Layout from "@/components/styled/Layout";
import Container from '@/components/styled/Container';
import Range from "@/components/common/Range";
import ChartView from '@/components/common/ChartView';
import formatNumber from '@/components/helper/formatNumber';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import twStyle from '@/components/helper/twStyle'
import Page from '@/components/styled/Page';

const ROITable = ({ invested, maturity, returns }) => {
    return <table class="shadow-sm rounded-lg border-collapse table-auto w-full text-sm mt-8 border border-slate-100 rounded-lg">
        <tbody>
            <tr>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Invested Amount</td>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'><strong>{formatNumber(invested)}</strong></td>
            </tr>
            <tr>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Est. Returns</td>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'><strong>{formatNumber(returns)}</strong></td>
            </tr>
            <tr>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>Total Value</td>
                <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'><strong>{formatNumber(maturity)}</strong></td>
            </tr>
        </tbody>
    </table>
}

export default class PPF extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 100000,
            rate: 7.1,
            tenure: 15,
            maturity: 0,
            invested: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: Number(value)
        }, function () {
            this.calculate()
        })
    }

    calculate() {
        const { amount, rate, tenure } = this.state;
        let maturity, invested;
        invested = amount * tenure
        let i = rate / 100

        maturity = amount * (Math.pow((1 + i), tenure) - 1) / i

        this.setState({
            maturity, invested
        })
    }

    componentDidMount() {
        this.calculate()
    }


    render() {
        const { invested, maturity, amount, tenure, rate, type } = this.state;
        const returns = Math.abs(maturity - invested)
        const chartData = {
            labels: [
                'Invested Amount',
                'Est. returns',
            ],
            datasets: [{
                data: [invested, returns],
                backgroundColor: [
                    twStyle.theme.colors.gray[100],
                    twStyle.theme.colors.primary
                ],
                hoverOffset: 4
            }]
        }
        return (
            <Layout>
                <Head>
                    <title>SIP | FinChamp</title>
                    <meta name="description" content="Financial Awareness platform" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Page className='sip'>
                    <Container>
                        <Breadcrumbs />
                        <h1 className='text-2xl font-semibold leading-normal mt-2 mb-12 text-primary'>SIP Calculator</h1>
                        <div className='flex'>
                            <div className='basis-2/3 pr-8'>
                                <div className='flex flex-col mb-6'>
                                    <div className='flex justify-between mb-4'>
                                        <label>Amount</label>
                                        <span>{formatNumber(amount)}</span>
                                    </div>
                                    <Range options={{ name: "amount", min: 500, max: 1000000, step: 500, defaultValue: this.state.amount, handleChange: this.handleChange }} />
                                </div>
                                <div className='flex flex-col mb-6'>
                                    <div className='flex justify-between mb-4'>
                                        <label>Interest Rate</label>
                                        <span>{`${rate} %`}</span>
                                    </div>
                                    <Range options={{ name: "rate", min: 1, max: 24, step: 0.1, defaultValue: this.state.rate, handleChange: this.handleChange }} />
                                </div>
                                <div className='flex flex-col mb-6'>
                                    <div className='flex justify-between mb-4'>
                                        <label>Tenure</label>
                                        <span>{`${tenure} Yrs`}</span>
                                    </div>
                                    <Range options={{ name: "tenure", min: 1, max: 30, step: 1, defaultValue: this.state.tenure, handleChange: this.handleChange }} />
                                </div>
                                <div className='flex flex-col my-6'>
                                    <ROITable invested={invested} maturity={maturity} returns={returns} />
                                </div>
                            </div>
                            <div className='basis-1/3 pl-8'>
                                <ChartView options={{ type: 'doughnut', data: chartData }} />
                            </div>
                        </div>
                    </Container>
                </Page>
            </Layout >
        )
    }
}
