import {useRef} from "react";

const renderText = (text, className, baseWeight = 300) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{ fontWeight: baseWeight }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ));
};

const setupTextHover = (container, type) => {

}

const Welcome = () => {

    const titleRef = useRef(null);
    const subTitle = useRef();
    return (
        <section id="welcome">
            <p ref={subTitle}>{ renderText("Hey I'm Rohit! Welcome to my", "text-3xl font-georama", 200)} </p>
            <h1 ref={titleRef} className="mt-7">{ renderText("Portfolio", "text-9xl italic font-georama")}</h1>
            <div className="small-screen">
                <p>This Portfolio is designed for desktop/tablet screens only.</p>
            </div>
        </section>
    );
}
export default Welcome;