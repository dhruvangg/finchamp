import { Layout } from "@/components/Layout";
import { Container, Page } from "@/components/common";
import HubspotForm from "@/components/common/HubspotForm";
import { Breadcrumbs } from "@/components/utility";
import Head from "next/head";

export default function index() {
    return (
        <Layout>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Financial Awareness platform" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Breadcrumbs />
            <Page>
                <Container>
                    <HubspotForm />
                </Container>
            </Page>
        </Layout>
    )
}
