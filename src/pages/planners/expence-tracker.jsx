import React, { Component } from 'react'
import Head from "next/head";
import { Container, Page } from '@/components/common';
import { Layout } from '@/components/Layout';
import { Breadcrumbs } from '@/components/utility';
import ExpenseTracker from '@/components/ExpenseTracker';

export default class expenceTracker extends Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title>Planner - FinChamp</title>
                    <meta name="description" content="Financial Awareness platform" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Breadcrumbs />
                <Page>
                    <Container>
                        <ExpenseTracker />
                    </Container>
                </Page>
            </Layout >
        )
    }
}