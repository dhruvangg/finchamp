import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Sample = ({ text }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.fromTo(
            textRef.current,
            { y: "100%" },
            { y: 0, duration: 1 }
        ).to(textRef.current, { y: "100%", duration: 1, delay: 2 });

        // You can customize the animation further as needed

        return () => {
            tl.kill(); // Cleanup GSAP animation on component unmount
        };
    }, []);

    return (
        <div className="text-container">
            <div className="text" ref={textRef}>
                {text}
            </div>
        </div>
    );
};

export default Sample;
