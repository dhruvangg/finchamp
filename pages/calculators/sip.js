import React, { Component } from 'react'
import Layout from "components/common/layout";
import Container from "components/styled/Container";
import Main from "components/styled/Main";
import Head from "next/head";
import Range from "components/common/Range";
import ChartView from 'components/common/ChartView';
import Box from 'components/styled/Box';
import formatNumber from 'components/helper/formatNumber';
import styled from 'styled-components';
import RadioButton from 'components/common/RadioButton';

const TD = styled.td`padding: 10px 10px 10px 0;`

const ROITable = ({ invested, maturity, returns }) => {
    return <table>
        <tbody>
            <tr>
                <TD>Invested Amount</TD>
                <TD><strong>{formatNumber(invested)}</strong></TD>
            </tr>
            <tr>
                <TD>Est. Returns</TD>
                <TD><strong>{formatNumber(returns)}</strong></TD>
            </tr>
            <tr>
                <TD>Total Value</TD>
                <TD><strong>{formatNumber(maturity)}</strong></TD>
            </tr>
        </tbody>
    </table>
}

export default class sip extends Component {
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
            [name]: value
        }, function () {
            this.calculate()
        })
    }

    calculate() {
        const { type, amount, rate, tenure } = this.state;
        const monthlyRate = rate / 12 / 100
        let maturity, invested;
        if (type === 'sip') {
            invested = amount * tenure * 12
            maturity = Math.ceil(amount * (Math.pow(1 + monthlyRate, tenure * 12) - 1) / monthlyRate * (1 + monthlyRate))
        } else {
            invested = amount
            maturity = Math.ceil(amount * Math.pow((1 + (rate / 100)), tenure))
        }
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
                    '#e53170',
                    '#f25f4c',
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
                <Main>
                    <Container>
                        <h1>SIP Calculator</h1>
                        <Box direction="row-responsive">
                            <Box flex="2" pad="15px" margin="0 0 30px">
                                <Box>
                                    <Box direction="row" margin="15px 0">
                                        <RadioButton label="SIP" name="type" value="sip" defaultChecked onChange={this.handleChange} />
                                        <RadioButton label="Lumpsum" name="type" value="lumpsum" onChange={this.handleChange} />
                                    </Box>
                                    <Box margin="15px 0">
                                        {type === 'sip' ? <>
                                            <Box direction="row" justify="space-between">
                                                <label>Monthly Amount</label>
                                                <span>{formatNumber(amount)}</span>
                                            </Box>
                                            <Range options={{ name: "amount", min: 500, max: 100000, step: 500, defaultValue: 5000, handleChange: this.handleChange }} />
                                        </> : <>
                                            <Box direction="row" justify="space-between">
                                                <label>Total Investment</label>
                                                <span>{formatNumber(amount)}</span>
                                            </Box>
                                            <Range options={{ name: "amount", min: 500, max: 1000000, step: 500, defaultValue: 25000, handleChange: this.handleChange }} />
                                        </>}
                                    </Box>
                                    <Box margin="15px 0">
                                        <Box direction="row" justify="space-between">
                                            <label>Interest Rate</label>
                                            <span>{`${rate} %`}</span>
                                        </Box>
                                        <Range options={{ name: "rate", min: 1, max: 24, step: 0.1, defaultValue: 12, handleChange: this.handleChange }} />
                                    </Box>
                                    <Box margin="15px 0">
                                        <Box direction="row" justify="space-between">
                                            <label>Tenure</label>
                                            <span>{`${tenure} Yrs`}</span>
                                        </Box>
                                        <Range options={{ name: "tenure", min: 1, max: 30, step: 1, defaultValue: 15, handleChange: this.handleChange }} />
                                    </Box>
                                </Box>
                                <ROITable invested={invested} maturity={maturity} returns={returns} />
                            </Box>
                            <Box flex="1" pad="15px" align="center">
                                <ChartView options={{ type: 'doughnut', data: chartData }} />
                            </Box>
                        </Box>
                    </Container>
                </Main>
            </Layout >
        )
    }
}
