import Layout from "components/common/layout";
import Main from "components/styled/Main";
import Head from 'next/head'
import Image from "next/image";

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
                    <li>Wealth tax</li>
                    <li>Income tax</li>
                </ul>
                <div>
                    <Image src="/assets/types-of-direct-tax.png" alt="types-of-direct-tax" width="1632" height="672" style={{ maxWidth: "1024px", height: "auto" }} />
                </div>
            </Main>
        </Layout>
    )
}
