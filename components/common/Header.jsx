import React from 'react'
import Link from 'next/link'
import { Lobster_Two } from '@next/font/google'
import { useRouter } from 'next/router'
import { Container } from '@/components/styled'

const lobsterTwo = Lobster_Two({ subsets: ['latin'], weight: ['400', '700'] })

export function Header() {
    const router = useRouter();
    return (
        <header className='bg-gray-50 py-4'>
            <Container className="flex justify-between">
                <Link href="/" className={`${lobsterTwo.className} text-primary text-5xl drop-shadow-md`}>FinChamp</Link>
                <nav>
                    <ul className='flex'>
                        <li><Link href="/investment" className={`${router.pathname === '/investment' ? 'text-primary' : 'text-gray-700'} flex p-4 text-gray-700 font-semibold`}>Investment</Link></li>
                        <li><Link href="/planning" className={`${router.pathname === '/planning' ? 'text-primary' : 'text-gray-700'} flex p-4 text-gray-700 font-semibold`}>Planning</Link></li>
                        <li><Link href="/calculators" className={`${router.pathname === '/calculators' ? 'text-primary' : 'text-gray-700'} flex p-4 font-semibold`}>Calculators</Link></li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}
