import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Typed from 'typed.js';
import { useEffect, useRef } from 'react'
import { Container, Layout } from 'components/styled';
import { FormattedMessage } from 'react-intl';

const options = {
  strings: ['Investment', 'Planning', 'Mutual Fund'],
  showCursor: 0,
  typeSpeed: 80,
  backSpeed: 50,
  loop: 1
};

export default function Home() {
  const topicsRef = useRef()
  useEffect(() => {
    const typed = new Typed(topicsRef.current, options);
    return () => {
      typed.destroy()
    }
  }, [])

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
              <h1 className='text-3xl xl:text-5xl font-bold mb-6'>Learn about <span className='text-primary' ref={topicsRef}>Investment</span></h1>
              <p className='text-center md:text-left'><FormattedMessage id='labels.bannerSubTitle' /></p>
              <button className='w-48 bg-primary rounded-lg py-2 text-white font-bold mt-4'><FormattedMessage id='labels.gettingStarted' /></button>
            </div>
            <div className='image-container w-full max-w-sm md:max-w-xl mx-auto relative'>
              <Image src="/assets/banner.svg" alt="FinChamp" className='image' fill={true} priority />
            </div>
          </Container>
        </section>
        <section id='services' className='my-8 md:my-16'>
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

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/pages/home`);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}