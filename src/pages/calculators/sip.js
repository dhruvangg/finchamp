import React, { Component } from 'react'
import Head from "next/head";
import { getLumpsum, getSIP, twStyle } from '@/lib';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { Container, Page } from '@/components/common';
import { Layout } from '@/components/Layout';
import { Breadcrumbs, RadioButton, Range } from '@/components/utility';
import { ChartView } from '@/components/utility/ChartView';
import ROITable from '@/components/ROITable';

export default class SIP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'sip',
            amount: 10000,
            rate: 12,
            tenure: 15,
            maturity: 0,
            invested: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: name === 'type' ? value : Number(value)
        }, function () {
            this.calculate()
        })
    }

    calculate() {
        const { type, amount, rate, tenure } = this.state;
        let { maturity, invested } = type === 'sip' ? getSIP(amount, rate, tenure) : getLumpsum(amount, rate, tenure)
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
                    <title>SIP Calculator- FinChamp</title>
                    <meta name="description" content="SIP Calculator - Calculate Returns for SIP Investments with FinChamp Online SIP Calculator and make the best plan to achieve your financial goals." />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Breadcrumbs />
                <Page className='sip'>
                    <Container>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                            <div className='col-span-2'>
                                <div className='flex mb-6'>
                                    <RadioButton label={<FormattedMessage id='labels.sip' />} name="type" value="sip" defaultChecked={this.state.type === 'sip'} onChange={this.handleChange} />
                                    <RadioButton label={<FormattedMessage id='labels.lumpsum' />} name="type" value="lumpsum" defaultChecked={this.state.type === 'lumpsum'} onChange={this.handleChange} />
                                </div>
                                <div className='flex flex-col mb-6'>
                                    {type === 'sip' ? <>
                                        <div className='flex justify-between mb-4'>
                                            <label><FormattedMessage id='labels.monthlyInvestment' /></label>
                                            <span><FormattedNumber value={amount} style="currency" currency="INR" /></span>
                                        </div>
                                        <Range options={{ name: "amount", min: 500, max: 100000, step: 500, defaultValue: this.state.amount, handleChange: this.handleChange }} />
                                    </> : <>
                                        <div className='flex justify-between mb-4'>
                                            <label><FormattedMessage id='labels.yearlyInvestment' /></label>
                                            <span><FormattedNumber value={amount} style="currency" currency="INR" /></span>
                                        </div>
                                        <Range options={{ name: "amount", min: 500, max: 1000000, step: 500, defaultValue: this.state.amount, handleChange: this.handleChange }} />
                                    </>}
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
                                        <span>{`${tenure} Yr`}</span>
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
