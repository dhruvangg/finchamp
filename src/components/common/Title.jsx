import gsap from "gsap";
import { useEffect, useRef } from "react"
import { Nunito } from 'next/font/google'

const titleFont = Nunito({
    weight: ['600', '500'],
    subsets: ['latin'],
    display: 'swap'
})


export default function Title({ children }) {
    const titleRef = useRef()
    useEffect(() => {
        gsap.fromTo(titleRef.current, {
            opacity: 0,
            y: -200
        }, {
            opacity: 1,
            y: 0,
            ease: "Power2.easeOut",
            duration: 0.5
        });
    }, []);

    return (
        <div className="flex items-end gap-2 fle-wrap overflow-hidden my-8">
            <h2 className={`text-3xl sm:text-5xl font-semibold opacity-0 leading-tight ${titleFont.className}`} ref={titleRef}>{children}</h2>
        </div>
    )
}