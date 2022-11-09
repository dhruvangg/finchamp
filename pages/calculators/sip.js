import Layout from "components/common/layout";
import Container from "components/styled/Container";
import Main from "components/styled/Main";
import Head from "next/head";
import { Formik, Field, Form } from 'formik';

import React, { Component } from 'react'

export default class sip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'sip',
            amount: 10000,
            rate: 12,
            tenure: 15,
            maturity: 0
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
        let maturity;
        if (type === 'sip') {
            maturity = Math.ceil(amount * (Math.pow(1 + monthlyRate, tenure * 12) - 1) / monthlyRate * (1 + monthlyRate))
        } else {
            maturity = Math.ceil(amount * Math.pow((1 + (rate / 100)), tenure))
        }
        this.setState({
            maturity
        })
    }


    render() {
        return (
            <Layout>
                <Head>
                    <title>FinChamp</title>
                    <meta name="description" content="Financial Awareness platform" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Main>
                    <Container>
                        <h1>SIP Calculator</h1>
                        <div style={{ height: "600px", width: "100%", border: "1px solid var(--secondary)", borderRadius: "10px" }}>
                            <form>
                                <div>
                                    <label><input type="radio" name="type" value="sip" id="sip" onChange={this.handleChange} defaultChecked /> SIP</label>
                                    <label><input type="radio" name="type" value="lumpsum" id="lumpsum" onChange={this.handleChange} /> Lumpsum</label>
                                </div>
                                {this.state.type === 'sip' ? <div>
                                    <label>Monthly Amount</label>
                                    <input type="range" name="amount" min="500" step={500} max="100000" defaultValue={5000} onChange={this.handleChange} />
                                </div> : <div>
                                    <label>Total Investment</label>
                                    <input type="range" name="amount" min="500" step={500} max="1000000" defaultValue={25000} onChange={this.handleChange} />
                                </div>}
                                <div>
                                    <label>Interest Rate</label>
                                    <input type="range" name="rate" min="1" step={0.1} max="24" defaultValue={12} onChange={this.handleChange} />
                                </div>
                                <div>
                                    <label>Tenure</label>
                                    <input type="range" name="tenure" min="1" max="30" defaultValue={15} onChange={this.handleChange} />
                                </div>
                            </form>
                            {JSON.stringify(this.state)}
                        </div>
                    </Container>
                </Main>
            </Layout>
        )
    }
}
