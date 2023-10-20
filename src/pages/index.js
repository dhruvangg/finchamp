import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types';
import Typed from 'typed.js';
import { server } from '@/config/constants';
import { Layout } from '@/components/Layout';
import { Container, Page } from '@/components/common';
import { getSortedPostsData } from '@/lib/posts';

export default function Home({ data, allPostsData }) {
  console.log(allPostsData);
  const { title, services, banner } = data
  const topicsRef = useRef()
  useEffect(() => {
    const typed = new Typed(topicsRef.current, {
      strings: banner.title.options,
      showCursor: 0,
      typeSpeed: 80,
      backSpeed: 50,
      loop: 1
    });
    return () => {
      typed.destroy()
    }
  }, [banner.title.options])

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Financial Awareness platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <section id='banner' className='my-8 md:my-16'>
          <Container>
            <div className='flex flex-col items-center py-16'>
              <h1 className='text-3xl xl:text-5xl font-semibold mb-6'>{banner.title.fixed} <span className='text-primary' ref={topicsRef}>Investment</span></h1>
              <p className='text-center md:text-left'>{banner.subtitle}</p>
              {banner.CTA.type === 'url' ?
                <Link href={banner.CTA.url} className='text-center w-48 bg-primary rounded-lg py-2 text-white font-semibold mt-4'>{banner.CTA.label}</Link> :
                <button className='w-48 bg-primary rounded-lg py-2 text-white font-bold mt-4'>{banner.CTA.label}</button>}
            </div>
          </Container>
        </section>
        <section id='services' className='my-8 md:my-16'>
          {services && <Container className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-8`}>
            {services.map((service, i) => {
              const { img, title, subtitle, url } = service
              return <Link className='p-8 border rounded-lg hover:shadow-lg' href={url} key={i}>
                <div className='flex justify-center mb-4 h-[150px]'>
                  <Image src={img} alt={title} height={150} width={150} />
                </div>
                <h3 className='text-primary font-bold text-2xl text-center py-4'>{title} &rarr;</h3>
                <p className='text-center font-semibold text-gray-600'>{subtitle}</p>
              </Link>
            })}
          </Container>}
        </section>
      </Page>
    </Layout >
  )
}

Home.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    services: PropTypes.array.isRequired,
    banner: PropTypes.object.isRequired
  })
}

export async function getServerSideProps({ locale }) {
  const res = await fetch(`${server}/api/pages/home?locale=${locale}`);
  const data = await res.json();

  const allPostsData = JSON.parse(JSON.stringify(getSortedPostsData(locale)));
  console.log('index', allPostsData);
  return {
    props: {
      data, 
      allPostsData
    }
  }
}