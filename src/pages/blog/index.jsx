import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Layout } from '@/components/Layout';
import Head from 'next/head';
import { Container, Page } from '@/components/common';
import { Breadcrumbs } from '@/components/utility';
import dayjs from 'dayjs';

export default function Home({ posts }) {
    console.log(posts);
    return (
        <Layout>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Financial Awareness platform" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Breadcrumbs />
            <Page>
                <Container>
                    <section id='banner' className='my-8 md:my-16'>
                        <div className="flex flex-wrap -m-4">
                            {posts.map(el => {
                                return <div key={el.slug} className="p-4 lg:w-1/3">
                                    <div className="h-full bg-gray-50 px-8 pt-10 pb-20 rounded-lg overflow-hidden text-center relative">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-4"><span className="inline-block bg-gray-100 text-gray-900 rounded-full px-3 py-1 text-xs font-semibold mr-2">Performance</span><span className="inline-block bg-gray-100 text-gray-900 rounded-full px-3 py-1 text-xs font-semibold mr-2">HTML</span></h2>
                                        <h1 className="title-font sm:text-2xl text-xl font-medium mb-3">{el.title}</h1>
                                        <p className="leading-relaxed mb-3 text-gray-900">{el.excerpt}</p>
                                        <a className="text-indigo-400 inline-flex items-center" href="/blog/improve-website-performance-using-webpavif-image-formats">
                                            Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-6 font-semibold text-sm">
                                            <span datetime="2022-01-28T13:36:17.039Z">{dayjs(el.date).format('MMMM DD, YYYY')}</span>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </section>
                </Container>
            </Page>
        </Layout>
    )
}

export async function getStaticProps({ locale }) {
    const filePath = path.join(`src/posts/${locale}`)
    let files = fs.readdirSync(filePath);
    files = files.filter(file => file.split('.')[1] == "mdx");
    const posts = files.map(file => {
        const fileData = fs.readFileSync(path.join(filePath, file), 'utf-8');
        const { data } = matter(fileData);
        return {
            ...JSON.parse(JSON.stringify(data)),
            slug: file.split('.')[0]
        }
    });
    return {
        props: {
            posts
        }
    }
}