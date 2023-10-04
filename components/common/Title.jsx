import gsap from "gsap";
import { useEffect, useRef } from "react"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Title({ children }) {
    const titleRef = useRef()
    const lineRef = useRef()
    useEffect(() => {
        gsap.fromTo(titleRef.current, {
            opacity: 0,
            y: -200,
        }, {
            opacity: 1,
            y: 0,
            ease: "Power2.easeOut",
            duration: 0.5
        });

        gsap.fromTo(lineRef.current, {
            width: 0,
        }, {
            width: '100%',
            ease: "Power2.easeOut",
            duration: 1
        });
    }, []);

    return (
        <div className="ml-[40px] md:ml-[35vw] md:pr-[40px] overflow-hidden">
            <div className="gsap-line h-[3px] md:h-[5px] mb-3 md:mb-5 md:mr-0 mr-[15px] bg-primary" ref={lineRef}>
            </div>
            <div className="flex items-end gap-2 fle-wrap">
                <h2 className={`text-[100px] opacity-0 leading-tight ${inter.className}`} ref={titleRef}>{children}</h2>
            </div>
        </div>
    )
}

// <div className="flex ">
//     <div className="inline-block">
//         <div className="h-2 w-full bg-primary"></div>
//         <div className="text-[100px] text-right">{children}</div>
//     </div>
// </div>