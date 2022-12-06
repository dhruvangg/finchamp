import React from 'react'
import Link from 'next/link'
import Head from "next/head";
import Image from 'next/image';
import { Container, Layout, Page, PageTitle } from '@/components/styled';
import { Breadcrumbs } from '@/components/common';

export default function Planners() {
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
                    <PageTitle>Make a Plan</PageTitle>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                        <Link href="/" className='p-8 border rounded-lg hover:shadow-lg flex flex-col items-center'>
                            <div className='h-[150px]'>
                                <Image src="/assets/budget.svg" height={150} width={120} alt="Car" />
                            </div>
                            <h5 className='text-primary font-bold'>Monthly budget</h5>
                        </Link>
                        <Link href="/planners/budget" className='p-8 border rounded-lg hover:shadow-lg flex flex-col items-center'>
                            <div className='h-[150px]'>
                                <Image src="/assets/budget.svg" height={150} width={120} alt="Car" />
                            </div>
                            <h5 className='text-primary font-bold'>Annual budget</h5>
                        </Link>
                        <Link href="/planners/buy-a-car" className='p-8 border rounded-lg hover:shadow-lg flex flex-col items-center'>
                            <div className='h-[150px]'>
                                <Image src="/assets/car.svg" height={150} width={120} alt="Car" />
                            </div>
                            <h5 className='text-primary font-bold'>Buy a Car</h5>
                        </Link>
                        <Link href="/" className='p-8 border rounded-lg hover:shadow-lg flex flex-col items-center'>
                            <div className='h-[150px]'>
                                <Image src="/assets/iphone.svg" height={150} width={120} alt="iPhone" />
                            </div>
                            <h5 className='text-primary font-bold'>Buy an iPhone</h5>
                        </Link>
                        <Link href="/" className='p-8 border rounded-lg hover:shadow-lg flex flex-col items-center'>
                            <div className='h-[150px]'>
                                <Image src="/assets/home.svg" height={150} width={120} alt="Home" />
                            </div>
                            <h5 className='text-primary font-bold'>Buy a Home</h5>
                        </Link>
                    </div>
                </Container>
            </Page>
        </Layout >
    )
}
