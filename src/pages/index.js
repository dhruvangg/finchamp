import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types';
import Typed from 'typed.js';
import { server } from '@/config/constants';
import { Layout } from '@/components/Layout';
import { Container } from '@/components/common';

export default function Home({ data }) {
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
      <div className='page'>
        <section id='banner' className='my-8 md:my-16'>
          <Container className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className='col-span-2 flex flex-col justify-center md:items-stretch items-center'>
              <h1 className='text-3xl xl:text-5xl font-bold mb-6'>{banner.title.fixed} <span className='text-primary' ref={topicsRef}>Investment</span></h1>
              <p className='text-center md:text-left'>{banner.subtitle}</p>
              {banner.CTA === 'url' ?
                <Link to={banner.CTA.url} className='w-48 bg-primary rounded-lg py-2 text-white font-bold mt-4'>{banner.CTA.label}</Link> :
                <button className='w-48 bg-primary rounded-lg py-2 text-white font-bold mt-4'>{banner.CTA.label}</button>}
            </div>
            <div className='image-container w-full max-w-sm md:max-w-xl mx-auto relative'>
              <Image src={banner.img} alt="FinChamp" className='image' fill={true} priority />
            </div>
          </Container>
        </section>
        <section id='services' className='my-8 md:my-16'>
          {services && <Container className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-${services.length < 4 ? services.length : 4} gap-4 sm:gap-6 xl:gap-8`}>
            {services.map((service, i) => {
              const { img, title, subtitle, url } = service
              return <Link className='p-8 border rounded-lg hover:shadow-lg' href={url} key={i}>
                <div className='flex justify-center mb-4 h-[150px]'>
                  <Image src={img} alt={title} height={150} width={150} />
                </div>
                <h3 className='text-primary font-bold text-2xl text-center py-4'>{title} &rarr;</h3>
                <p>{subtitle}</p>
              </Link>
            })}
          </Container>}
        </section>
      </div>
    </Layout>
  )
}

Home.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    services: PropTypes.object.isRequired,
    banner: PropTypes.object.isRequired
  })
}

export async function getServerSideProps({ locale }) {
  const res = await fetch(`${server}/api/pages/home?locale=${locale}`);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}