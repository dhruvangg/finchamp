import Head from "next/head"
import { server } from "@/config/constants"
import { Page } from "@/components/common"
import { Layout } from "@/components/Layout"
import { Breadcrumbs } from "@/components/utility"
import IBox from "@/components/Investment/IBox"

export default function Investment({ data }) {
    const { title, types } = data
    return (
        <Layout>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Financial Awareness platform" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Breadcrumbs />
            <Page>
                {types.map((type, i) => <IBox key={i} {...type} />)}
            </Page>
        </Layout>
    )
}

export async function getServerSideProps({ locale }) {
    const res = await fetch(`${server}/api/pages/investment?locale=${locale}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}