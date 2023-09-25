import React, { Component } from 'react'
import Head from "next/head";
import { Container, Layout, Page, PageTitle } from 'components/styled';
import { Breadcrumbs, ChartView, Range } from 'components/common';
import ROITable from 'components/ROITable';
import { getFD, twStyle } from 'lib';
import { FormattedMessage, FormattedNumber } from 'react-intl';

export default class FD extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 100000,
            rate: 5,
            tenure: 5,
            maturity: 0,
            invested: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        }, function () {
            this.calculate()
        })
    }

    calculate() {
        const { amount, rate, tenure } = this.state;
        let { maturity, invested } = getFD(amount, rate, tenure)
        this.setState({
            maturity, invested
        })
    }

    componentDidMount() {
        this.calculate()
    }


    render() {
        const { invested, maturity, amount, tenure, rate } = this.state;
        const returns = Math.abs(maturity - invested)
        const chartData = {
            labels: [
                'Invested Amount',
                'Est. returns'
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
                        <PageTitle>FD Calculator</PageTitle>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                            <div className='col-span-2'>
                                <div className='flex flex-col mb-6'>
                                    <div className='flex justify-between mb-4'>
                                        <label>Amount</label>
                                        <span><FormattedNumber value={amount} style="currency" currency="INR" /></span>
                                    </div>
                                    <Range options={{ name: "amount", min: 500, max: 1000000, step: 500, defaultValue: this.state.amount, handleChange: this.handleChange }} />
                                </div>
                                <div className='flex flex-col mb-6'>
                                    <div className='flex justify-between mb-4'>
                                        <label><FormattedMessage id='labels.interestRate' /></label>
                                        <span><FormattedMessage id='labels.varRate' values={{ value: rate }} /></span>
                                    </div>
                                    <Range options={{ name: "rate", min: 1, max: 24, step: 0.1, defaultValue: this.state.rate, handleChange: this.handleChange }} />
                                </div>
                                <div className='flex flex-col mb-6'>
                                    <div className='flex justify-between mb-4'>
                                        <label><FormattedMessage id='labels.tenure' /></label>
                                        <span>{`${tenure} Yrs`}</span>
                                    </div>
                                    <Range options={{ name: "tenure", min: 1, max: 30, step: 1, defaultValue: this.state.tenure, handleChange: this.handleChange }} />
                                </div>
                                <div className='flex flex-col my-6'>
                                    <ROITable invested={invested} maturity={maturity} returns={returns} />
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <ChartView options={{ type: 'doughnut', data: chartData }} />
                            </div>
                        </div>
                    </Container>
                </Page>
            </Layout >
        )
    }
}
