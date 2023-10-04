import { Container, Layout } from 'components/styled';
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
                    <Container>
                        <h1 className='inline-block text-2xl font-semibold border-b-2 border-primary'>Taxation</h1>
                        <article class="prose lg:prose-xl mx-auto">
                            <blockquote>Be it an individual or any business/organization, all have to pay the respective taxes in various forms. These taxes are further subcategorized into direct and indirect taxes depending on the manner in which they are paid to the taxation authorities.</blockquote>

                            <h5>Direct Tax</h5>
                            <ul>
                                <li>The definition of direct tax is hidden in its name which implies that this tax is paid directly to the government by the taxpayer</li>
                                <li>The general examples of this type of tax in India are <a href="https://groww.in/p/income-tax/">Income Tax</a> and Wealth Tax.</li>
                                <li>From the government’s perspective, estimating tax earnings from direct taxes is relatively easy as it bears a direct correlation to the income or wealth of the registered taxpayers.</li>
                            </ul>
                            <h5>Indirect Tax</h5>
                            <ul>
                                <li>Indirect taxes are slightly different from direct taxes and the collection method is also a bit different. These taxes are consumption-based that are applied to goods or services when they are bought and sold.</li>
                                <li>The indirect tax payment is received by the government from the seller of goods/services.</li>
                                <li>The seller, in turn, passes the tax on to the end-user i.e. buyer of the good/service.</li>
                                <li>Thus the name indirect tax as the end-user of the good/service does not pay the tax directly to the government.</li>
                                <li>Some general examples of indirect tax include sales tax, Goods and Services Tax (<a href="https://groww.in/p/gst/">GST</a>), Value Added Tax (VAT), etc.</li>
                            </ul>
                        </article>
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