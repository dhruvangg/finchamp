import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from 'components/common/layout'
import HighText from 'components/styled/HighText'
import styled from 'styled-components'
import Link from 'next/link'
import Main from 'components/styled/Main'


const Title = styled.h1`
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;
`

const Subtitle = styled.h3`
    margin: 4rem 0;
    line-height: 1.5;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
`

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>FinChamp</title>
        <meta name="description" content="Financial Awareness platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>Welcome to <HighText>Fin</HighText>Champ!</Title>
        <Subtitle>A perfect solution for growing salaried person who has less/no idea about financial terms.</Subtitle>
        <div className={styles.grid}>
          <Link href="https://nextjs.org/docs" className={styles.card}>
            <h2>Taxation &rarr;</h2>
            <p>Income tax calculation, File IT Return and ways of tax saving.</p>
          </Link>

          <Link href="https://nextjs.org/learn" className={styles.card}>
            <h2>Investments &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Link>

          <Link
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Insurrance &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Link>

          <Link
            href="/calculators/sip"
            className={styles.card}
          >
            <h2>Calculators &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Link>
        </div>
      </Main>
    </Layout>
  )
}
