import React, { Component } from 'react'
import Head from "next/head";
import { Container, Layout, Page, PageTitle } from 'components/styled';
import { Breadcrumbs } from 'components/common';
import { toInr } from 'lib';

export default class buyACar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            annualIncome: 1600000,
            carPrice: 500000,
            loanTenure: 4,
            loanRate: 9.4,
            dp: 100000,
            loanAmount: 400000,
            emi: 0
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
        const { annualIncome, carPrice, loanTenure, loanRate } = this.state;
        const dp = carPrice * 0.2
        const _10 = annualIncome / 12 * 0.1
        const loanAmount = carPrice - dp

        const p = loanAmount
        const r = loanRate / 100 / 12
        const n = loanTenure * 12

        const emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)

        this.setState({
            dp, loanAmount, emi, _10
        })
    }

    render() {
        return (
            <Layout>
                <Head>
                    <title>Plan to buy a car - FinChamp</title>
                    <meta name="description" content="Financial Awareness platform" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Page>
                    <Container>
                        <Breadcrumbs />
                        <PageTitle>Plan to buy a car</PageTitle>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Your Annual Income</td>
                                    <td><input type="number" step="10000" name="annualIncome" id="annualIncome" defaultValue={this.state.annualIncome} onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>Car Price (On Road)</td>
                                    <td><input type="number" step="10000" name="carPrice" id="carPrice" defaultValue={this.state.carPrice} onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>Loan Tenure</td>
                                    <td><input type="number" step="1" name="loanTenure" id="loanTenure" defaultValue={this.state.loanTenure} onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>Loan Rate</td>
                                    <td><input type="number" step="0.1" name="loanRate" id="loanRate" defaultValue={this.state.loanRate} onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>Down Payment</td>
                                    <td>{toInr(this.state.dp)}</td>
                                </tr>
                                <tr>
                                    <td>Loan Amount</td>
                                    <td>{toInr(this.state.loanAmount)}</td>
                                </tr>
                                <tr>
                                    <td>EMI</td>
                                    <td>{toInr(this.state.emi)}</td>
                                </tr>
                                <tr>
                                    <td>_10</td>
                                    <td>{toInr(this.state._10)}</td>
                                </tr>
                                <tr>
                                    <td>Result</td>
                                    <td>{this.state._10 > this.state.emi ? 'Y' : 'N'}</td>
                                </tr>
                            </tbody>
                        </table>
                        <article className="prose lg:prose-xl max-w-full">
                            <h4>20/4/10 Vehicle rule</h4>
                            <p>This rule talks about the prudent practices while purchasing a vehicle / car by way of a loan.</p>
                            <strong>Rule</strong>
                            <p>The rule states that you should make a down payment for the loan of at least 20% of the on road price; the tenure of the vehicle loan should not be more than 4 years; the total expenses towards the car ownership should be less than 10% of gross annual income (total expenses ideally should include vehicle loan EMI expenses + fuel expenses + insurance + any other vehicle expenses like parking rentals )</p>
                            <strong>Example</strong>
                            <p>Let us say your annual income is 20 lacs (20,00,000). This rule states that your yearly transportation costs (car loan EMI + annual fuel expenses + annual insurance) should be less than 2 lacs.</p>
                        </article>
                    </Container>
                </Page>
            </Layout >
        )
    }
}

