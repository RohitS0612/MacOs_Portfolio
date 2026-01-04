import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const FONT_WEIGHT = {
    subtitle: {min: 100, max: 400, default: 100},
    title: {min: 400, max: 900, default: 400}
};

const renderText = (text, className, baseWeight = 300) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            // style={{ fontWeight: baseWeight }}
            style={{fontVariationSettings: `'wght' ${baseWeight}`}}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ));
};

const setupTextHover = (container, type) => {
    if (!container) return () => {
    };

    const letters = container.querySelectorAll("span");
    const {min, max, default: base} = FONT_WEIGHT[type];

    const animateLetter = (letter, weight, duration = 0.25) => {
        gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`
        });
    };

    const handleMouseMove = (event) => {
        const {left} = container.getBoundingClientRect();
        const mouseX = event.clientX - left;

        letters.forEach((letter) => {
            const {left: l, width: w} = letter.getBoundingClientRect();

            const letterCenter = (l - left) + w / 2;
            const distance = Math.abs(mouseX - letterCenter);

            const intensity = Math.exp(-(distance ** 2) / 2000);

            animateLetter(letter, min + (max - min) * intensity);
        });
    };

    const resetLetters = () => {
        letters.forEach(letter => animateLetter(letter, base, 0.4));
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", resetLetters);
};


const Welcome = () => {

    const titleRef = useRef(null);
    const subTitle = useRef();
    useGSAP(() => {
        // const titleCleanump = setupTextHover(titleRef.current, "title");
        // const subTitleCleanup = setupTextHover(subTitle.current, "subtitle");

        setupTextHover(titleRef.current, "title");
        setupTextHover(subTitle.current, "subtitle");


        // return () => {
        //     titleCleanump();
        //     subTitleCleanup();
        // }
    }, []);
    return (
        <section id="welcome">
            {/* <p ref={subTitle} style={{color:"#1A2228"}}>{renderText("Hey I'm Rohit! Welcome to my", "text-3xl font-georama", 200)} </p> */}
            <h1 ref={titleRef} className="mt-7" style={{color:"#1A2228"}}>{renderText("hello", "text-9xl italic font-georama")}</h1>
            <div className="small-screen" style={{color:"red"}}>
                <p>This Portfolio is designed for desktop/tablet screens only.</p>
            </div>
        </section>
    );
}
export default Welcome;