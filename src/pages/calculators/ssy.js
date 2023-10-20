import React, { Component } from 'react'
import Head from "next/head";
import { getSSY, twStyle } from '@/lib';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { Container, Page } from '@/components/common';
import { Layout } from '@/components/Layout';
import { Breadcrumbs, Range } from '@/components/utility';
import { ChartView } from '@/components/utility/ChartView';
import ROITable from '@/components/ROITable';
import { SSY_RATE } from '@/config/constants';

export default class FD extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 12000,
            rate: SSY_RATE,
            tenure: 15,
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
        const { amount, tenure, rate } = this.state;
        getSSY(amount, tenure, rate);
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
                    <title>PPF | FinChamp</title>
                    <meta name="description" content="Financial Awareness platform" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Breadcrumbs />
                <Page className='sip'>
                    <Container>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                            <div className='col-span-2'>
                                <div className='flex flex-col mb-6'>
                                    <div className='flex justify-between mb-4'>
                                        <label><FormattedMessage id='labels.yearlyInvestment' /></label>
                                        <span><FormattedNumber value={amount} style="currency" currency="INR" /></span>
                                    </div>
                                    <Range options={{ name: "amount", min: 500, max: 1500000, step: 500, defaultValue: this.state.amount, handleChange: this.handleChange }} />
                                </div>
                                <div className='flex flex-col mb-6'>
                                    <div className='flex justify-between mb-4'>
                                        <label><FormattedMessage id='labels.tenure' /></label>
                                        <span>{`${tenure} Yrs`}</span>
                                    </div>
                                    <Range options={{ name: "tenure", min: 15, max: 50, step: 1, defaultValue: this.state.tenure, handleChange: this.handleChange }} />
                                </div>
                                <div className='flex flex-col mb-6'>
                                    <div className='flex justify-between mb-4'>
                                        <label><FormattedMessage id='labels.interestRate' /></label>
                                        <span><FormattedMessage id='labels.varRate' values={{ value: rate }} /></span>
                                    </div>
                                    <Range options={{ disabled: true, name: "rate", min: 1, max: 24, step: 0.1, defaultValue: this.state.rate, handleChange: this.handleChange }} />
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
