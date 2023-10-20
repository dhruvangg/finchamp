import Link from "next/link";
import { Container } from "../common";

export default function IBox({ title, excerpt, pros, cons }) {
    return (
        <div className="border-b last:border-b-0 w-full py-8">
            <Container>
                <div className="grid md:grid-cols-5 md:gap-8 mx-auto">
                <h3 className="text-2xl mb-4">{title}</h3>
                    <div className="flex flex-col-reverse md:flex-row justify-between md:col-span-4">
                        <div>
                            <p>{excerpt}</p>
                            <div class="flex mt-4">
                                <ul class="flex-1">
                                    {pros.length > 0 && pros.map(el => <li key={el} className="capitalize text-sm font-semibold text-gray-700 pb-1 before:content-['+'] before:mr-2">{el}</li>)}
                                </ul>
                                <ul class="flex-1">
                                    {cons.length > 0 && cons.map(el => <li key={el} className="capitalize text-sm font-semibold text-gray-700 pb-1 before:content-['-'] before:mr-2">{el}</li>)}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <ul className="flex mb-4">
                                <li className="md:ml-4">
                                    <Link title="Calculator" className="animate-pulse" href={'#'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                                        </svg>
                                    </Link>
                                </li>
                                <li className="ml-4">
                                    <Link title="View More" className="animate-pulse" href={'#'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
