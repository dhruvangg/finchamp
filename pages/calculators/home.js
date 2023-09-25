import Head from 'next/head';
import { Breadcrumbs, ChartView, Range } from 'components/common';
import { Container, Layout, Page, PageTitle } from 'components/styled';
import { getHLIntrest, twStyle } from 'lib';
import React, { Component } from 'react'
import { IOLTable } from 'components/IOLTable';
import { FormattedMessage, FormattedNumber } from 'react-intl';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 1000000,
            rate: 6.5,
            tenure: 5
        };
        this.handleChange = this.handleChange.bind(this);
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
        let homeLoanData = getHLIntrest(amount, rate, tenure);
        this.setState({
            homeLoanData
        });
    }

    componentDidMount() {
        this.calculate();
    }

    render() {
        const { amount, tenure, rate, homeLoanData } = this.state;

        const chartData = {
            labels: [
                'Principle Amount',
                'Intrest Amount'
            ],
            datasets: [{
                data: [homeLoanData?.principalAmount, homeLoanData?.intrestAmount],
                backgroundColor: [
                    twStyle.theme.colors.gray[100],
                    twStyle.theme.colors.primary
                ],
                hoverOffset: 4
            }]
        };
        return (
            <Layout>
                <Head>
                    <title>Home Loan Calculator- FinChamp</title>
                    <meta name="description" content="Home Loan Description" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Page className='home-loan'>
                    <Container>
                        <Breadcrumbs />
                        <PageTitle>Home Loan Calculator</PageTitle>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                            <div className='col-span-2'>
                                <div className='flex flex-col mb-6'>
                                    <div className='flex justify-between mb-4'>
                                        <label><FormattedMessage id='labels.loanAmount'/></label>
                                        <span><FormattedNumber value={amount} style="currency" currency="INR" /></span>
                                    </div>
                                    <Range options={{ name: "amount", min: 500, max: 5000000, step: 500, defaultValue: this.state.amount, handleChange: this.handleChange }} />
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
                                        <label><FormattedMessage id='labels.tenure'/></label>
                                        <span>{`${tenure} Yrs`}</span>
                                    </div>
                                    <Range options={{ name: "tenure", min: 1, max: 30, step: 1, defaultValue: this.state.tenure, handleChange: this.handleChange }} />
                                </div>
                                <div className='flex flex-col my-6'>
                                    { homeLoanData && (<IOLTable homeLoanData={homeLoanData}/>)}
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <ChartView options={{ type: 'doughnut', data: chartData }} />
                            </div>
                        </div>
                    </Container>
                </Page>
            </Layout>
        )
    }
}