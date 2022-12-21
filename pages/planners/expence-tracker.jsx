import React, { Component } from 'react'
import Head from "next/head";
import { Container, Layout, Page } from 'components/styled';
import { Breadcrumbs } from 'components/common';
import ExpenseTracker from 'components/ExpenseTracker';

export default class expenceTracker extends Component {
    render() {
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
                        <ExpenseTracker />
                    </Container>
                </Page>
            </Layout >
        )
    }
}