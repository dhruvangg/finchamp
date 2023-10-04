import Head from "next/head"
import { Container, Layout } from "components/styled"
import { server } from "config"
import Title from "components/common/Title"
import { Playfair_Display } from 'next/font/google'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useEffect, useRef } from "react"
import gsap from "gsap"

const playFair = Playfair_Display({
    weight: ['800'],
    subsets: ['latin'],
    display: 'swap',
})

const PrevArrow = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

const NextArrow = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


export default function Investment({ data }) {
    const sliderRef = useRef()
    useEffect(() => {
        gsap.fromTo(sliderRef.current, {
            x: 1000,
        }, {
            x: 0,
            ease: "Power2.easeOut",
            duration: 1
        });
    }, []);

    const { title, types } = data
    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        // prevArrow: <PrevArrow />,
        // nextArrow: <NextArrow />,
    };
    return (
        <Layout>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Financial Awareness platform" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='page mt-32'>
                <Container>
                    <Title>Investment</Title>
                </Container>
                <div  ref={sliderRef}>
                    {types.length > 0 && <Slider className="my-8" {...settings}>
                        {types.map(type => {
                            return <div key={type.title} className="flex p-2 h-full">
                                <div className="flex flex-col justify-between hover:shadow-2xl border cursor-pointer h-full">
                                    <h3 className={`text-5xl font-bold text-center p-8 text-gray-800 ${playFair.className}`}>{type.title}</h3>
                                    <div className="grid grid-cols-2 border-t cursor-default">
                                        <ul className="flex-1 border-r p-4">
                                            {type.pros.map(el => <li key={el} className="text-xs uppercase font-bold text-green-700 tracking-wide pb-1">{el}</li>)}
                                        </ul>
                                        <ul className="flex-1 p-4">
                                            {type.cons.map(el => <li key={el} className="text-xs uppercase font-bold text-red-600 tracking-wide pb-1">{el}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        })}
                    </Slider>}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps({ locale }) {
    const res = await fetch(`${server}/api/pages/investment?locale=${locale}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}
// {types && <div className="grid grid-cols-3 gap-12">
//     {types.map(type => {
//         return <div key={type.title} className="flex flex-col justify-between hover:shadow-2xl border cursor-pointer">
//             <h3 className={`text-5xl font-bold text-center p-8 text-gray-800 ${playFair.className}`}>{type.title}</h3>
//             <div className="grid grid-cols-2 border-t cursor-default">
//                 <ul className="flex-1 border-r p-4">
//                     {type.pros.map(el => <li key={el} className="text-xs uppercase font-bold text-green-700 tracking-wide pb-1">{el}</li>)}
//                 </ul>
//                 <ul className="flex-1 p-4">
//                     {type.cons.map(el => <li key={el} className="text-xs uppercase font-bold text-red-600 tracking-wide pb-1">{el}</li>)}
//                 </ul>
//             </div>
//         </div>
//     })}
// </div>}