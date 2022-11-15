import Layout from "components/common/layout";
import Main from "components/styled/Main";
import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";

export default function Taxation() {
    return (
        <Layout>
            <Head>
                <title>Taxation | FinChamp</title>
                <meta name="description" content="Financial Awareness platform" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <h1>Taxation</h1>
                <p>In India, There are lot of taxes deducated directly and indirectly. Among that here we will discuss about direct taxes as it impacts more on our pocket. As given in figure, There are mainly three types of taxes: </p>
                <ul>
                    <li><strong>Capital Gain tax</strong> Nowadays Many people invests in Mutual fund and share market, hence they might gain profit or loss. So Whatever you earn through that way is taxable and is called Capital Gain.</li>
                    <li><strong><Link href="https://cleartax.in/s/wealth-tax">Wealth tax</Link></strong> If the total net wealth of an individual, HUF or company exceeds Rs. 30 lakhs, on the valuation date, tax @1% will be leviable on the amount in excess of Rs. 30 lakhs.  Every person whose net wealth exceeds such limit shall furnish a return of net wealth. The due date is same as that of Income tax return.</li>
                    <li><strong><Link href="https://cleartax.in/s/income-tax">Income tax</Link></strong> is a type of tax that the central government charges on the income earned during a financial year by the individuals and businesses. </li>
                </ul>
                <div>
                    <Image src="/assets/types-of-direct-tax.png" alt="types-of-direct-tax" width="1632" height="672" style={{ maxWidth: "1024px", height: "auto" }} />
                </div>
            </Main>
        </Layout>
    )
}
