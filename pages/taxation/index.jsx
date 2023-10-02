import { Container, Layout, Page } from 'components/styled';
import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from 'react-intl';


export default function Taxation() {
    return (
        <Layout>
            <Head>
                <title>FinChamp</title>
                <meta name="description" content="Financial Awareness platform" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='page'>
                <section id='banner' className='my-8 md:my-16'>
                    <Container className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className='col-span-2 flex flex-col justify-center md:items-stretch items-center'>
                            <h1 className='text-3xl xl:text-5xl font-bold mb-6'>Learn about <span className='text-primary'>Taxation</span></h1>
                            <p className='text-center md:text-left'><FormattedMessage id='labels.bannerSubTitle' /></p>
                        </div>
                        <div className='image-container w-full max-w-sm md:max-w-xl mx-auto relative'>
                            <Image src="/assets/taxation.svg" alt="Taxation" className='image' fill={true} priority />
                        </div>
                    </Container>
                </section>
                <section id='services' className='my-8 md:my-16'>
                    <div className='my-10'>
                        <h2 className='text-center text-3xl font-semibold my-4'>Types of Taxes in india</h2>
                        <hr className='bg-primary h-1 w-16 mx-auto' />
                    </div>
                    <Container className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8">
                        <Link className='p-8 border rounded-lg hover:shadow-lg' href="/taxation">
                            <div className='flex justify-center mb-4 h-[150px]'>
                                <Image src="/assets/savings.svg" alt="Taxation" height={150} width={150} />
                            </div>
                            <h3 className='text-primary font-bold text-2xl text-center py-4'><FormattedMessage id='labels.taxation' /> &rarr;</h3>
                            <p>Income tax calculation, File IT Return and ways of tax saving.</p>
                        </Link>
                        <Link className='p-8 border rounded-lg hover:shadow-lg disabled' href="#">
                            <div className='flex justify-center mb-4 h-[150px]'>
                                <Image src="/assets/investments.svg" alt="Investments" height={150} width={150} />
                            </div>
                            <h3 className='text-primary font-bold text-2xl text-center py-4'><FormattedMessage id='labels.investment' /> &rarr;</h3>
                            <p>Learn about Next.js in an interactive course with quizzes!</p>
                        </Link>
                        <Link className='p-8 border rounded-lg hover:shadow-lg disabled' href="#">
                            <div className='flex justify-center mb-4 h-[150px]'>
                                <Image src="/assets/insurance.svg" alt="insurance" height={150} width={150} />
                            </div>
                            <h3 className='text-primary font-bold text-2xl text-center py-4'><FormattedMessage id='labels.insurrance' /> &rarr;</h3>
                            <p>Discover and deploy boilerplate example Next.js projects.</p>
                        </Link>
                        <Link className='p-8 border rounded-lg hover:shadow-lg' href="/calculators">
                            <div className='flex justify-center mb-4 h-[150px]'>
                                <Image src="/assets/calculation.svg" alt="calculation" height={150} width={150} />
                            </div>
                            <h3 className='text-primary font-bold text-2xl text-center py-4'><FormattedMessage id='labels.calculators' /> &rarr;</h3>
                            <p>
                                Instantly deploy your Next.js site to a public URL with Vercel.
                            </p>
                        </Link>
                    </Container>
                </section>
            </div>
        </Layout>
    )
}

// <Layout>
//     <Head>
//         <title>Taxation | FinChamp</title>
//         <meta name="description" content="Financial Awareness platform" />
//         <link rel="icon" href="/favicon.ico" />
//     </Head>
//     <Page>
//         <Container className="prose lg:prose-xl">
//             <h1>Taxation</h1>
//             <p>In India, There are lot of taxes deducated directly and indirectly. Among that here we will discuss about direct taxes as it impacts more on our pocket. As given in figure, There are Pagely three types of taxes: </p>
//             <ul>
//                 <li><strong>Capital Gain tax</strong> Nowadays Many people invests in Mutual fund and share market, hence they might gain profit or loss. So Whatever you earn through that way is taxable and is called Capital Gain.</li>
//                 <li><strong><Link href="https://cleartax.in/s/wealth-tax">Wealth tax</Link></strong> If the total net wealth of an individual, HUF or company exceeds Rs. 30 lakhs, on the valuation date, tax @1% will be leviable on the amount in excess of Rs. 30 lakhs.  Every person whose net wealth exceeds such limit shall furnish a return of net wealth. The due date is same as that of Income tax return.</li>
//                 <li><strong><Link href="https://cleartax.in/s/income-tax">Income tax</Link></strong> is a type of tax that the central government charges on the income earned during a financial year by the individuals and businesses. </li>
//             </ul>
//             <div>
//                 <Image src="/assets/types-of-direct-tax.png" alt="types-of-direct-tax" width="1632" height="672" style={{ maxWidth: "1024px", height: "auto" }} />
//             </div>
//         </Container>
//     </Page>
// </Layout>