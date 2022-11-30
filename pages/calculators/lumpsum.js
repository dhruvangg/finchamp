import React, { Component } from 'react'
import Head from "next/head";
import { formatNumber, getLumpsum, getSIP, twStyle } from '@/components/helper';
import { Container, Layout, Page } from '@/components/styled';
import { Breadcrumbs, ChartView, RadioButton, Range, ROITable } from '@/components/common';

export default class Lumpsum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'lumpsum',
            amount: 100000,
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
            [name]: value
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
                    <title>Lumpsum Calculator - FinChamp</title>
                    <meta name="description" content="Lumpsum Calculator - Calculate Returns for Lumpsum Investments with FinChamp Online Lumpsum Calculator and make the best plan to achieve your financial goals." />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Page className='lumpsum'>
                    <Container>
                        <Breadcrumbs />
                        <h1 className='text-2xl font-semibold leading-normal mt-2 mb-12 text-primary'>Lumpsum Calculator</h1>
                        <div className='flex'>
                            <div className='basis-2/3 pr-8'>
                                <div className='flex mb-6'>
                                    <RadioButton label="SIP" name="type" value="sip" defaultChecked={this.state.type === 'sip'} onChange={this.handleChange} />
                                    <RadioButton label="Lumpsum" name="type" value="lumpsum" defaultChecked={this.state.type === 'lumpsum'} onChange={this.handleChange} />
                                </div>
                                <div className='flex flex-col mb-6'>
                                    {type === 'sip' ? <>
                                        <div className='flex justify-between mb-4'>
                                            <label>Monthly Amount</label>
                                            <span>{formatNumber(amount)}</span>
                                        </div>
                                        <Range options={{ name: "amount", min: 500, max: 100000, step: 500, defaultValue: this.state.amount, handleChange: this.handleChange }} />
                                    </> : <>
                                        <div className='flex justify-between mb-4'>
                                            <label>Total Investment</label>
                                            <span>{formatNumber(amount)}</span>
                                        </div>
                                        <Range options={{ name: "amount", min: 500, max: 1000000, step: 500, defaultValue: this.state.amount, handleChange: this.handleChange }} />
                                    </>}
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
                                        <span>{`${tenure} %`}</span>
                                    </div>
                                    <Range options={{ name: "tenure", min: 1, max: 30, step: 1, defaultValue: this.state.tenure, handleChange: this.handleChange }} />
                                </div>
                                <div className='flex flex-col my-6'>
                                    <ROITable invested={invested} maturity={maturity} returns={returns} />
                                </div>
                            </div>
                            <div className='basis-1/3 md:pl-8 flex justify-center my-8 md:m-0'>
                                <ChartView options={{ type: 'doughnut', data: chartData }} />
                            </div>
                        </div>
                    </Container>
                </Page>
            </Layout >
        )
    }
}
