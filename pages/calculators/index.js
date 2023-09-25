import React from 'react'
import Link from 'next/link'
import Head from "next/head";
import { Container, Layout, Page } from 'components/styled';
import { Breadcrumbs } from 'components/common';

export default function Calculators() {
    return (
        <Layout>
            <Head>
                <title>Financial Calculators - FinChamp</title>
                <meta name="description" content="Financial Awareness platform" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Page>
                <Container>
                    <Breadcrumbs />
                </Container>
                <section id='banner'>
                    <Container className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 xl:gap-8'>
                        <Link href="/calculators/sip" className='p-6 border rounded-lg flex flex-col items-center ml-0 hover:shadow-lg'>
                            <h5 className='text-primary font-bold mb-4'>SIP</h5>
                            <p className='text-center'>Calculate how much you need to save or how much you will accumulate with your SIP</p>
                        </Link>
                        <Link href="/calculators/lumpsum" className='p-6 border rounded-lg flex flex-col items-center hover:shadow-lg'>
                            <h5 className='text-primary font-bold mb-4'>LumpSum</h5>
                            <p className='text-center'>Calculate returns for lumpsum investments to achieve your financial goals</p>
                        </Link>
                        <Link href="/calculators/fd" className='p-6 border rounded-lg flex flex-col items-center hover:shadow-lg'>
                            <h5 className='text-primary font-bold mb-4'>FD</h5>
                            <p className='text-center'>Check returns on your fixed deposits (FDs) without any hassle</p>
                        </Link>
                        <Link href="/calculators/ppf" className='p-6 border rounded-lg flex flex-col items-center hover:shadow-lg disabled'>
                            <h5 className='text-primary font-bold mb-4'>PPF</h5>
                            <p className='text-center'>Calculate your returns on Public Provident Fund (PPF)</p>
                        </Link>
                        <Link href="/calculators/epf" className='p-6 border rounded-lg flex flex-col items-center mr-0 hover:shadow-lg disabled'>
                            <h5 className='text-primary font-bold mb-4'>EPF</h5>
                            <p className='text-center'>Calculate returns for your Employee’s Provident Fund (EPF)</p>
                        </Link>
                        <Link href="/calculators/home" className='p-6 border rounded-lg flex flex-col items-center mr-0 hover:shadow-lg'>
                            <h5 className='text-primary font-bold mb-4'>Home</h5>
                            <p className='text-center'>Calculate returns for your Home Loan</p>
                        </Link>
                    </Container>
                </section>
            </Page>
        </Layout >
    )
}
