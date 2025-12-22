import {useRef} from "react";

const renderText = (text, className, baseWeight = 400) =>{
    return [...text].map((char, i) => (
        <span key={i} className={className} style={{ fontWeight: baseWeight }} >{char}

        </span>
    ))
}
const Welcome = () => {

    const titleRef = useRef(null);
    const subTitle = useRef();
    return (
        <section id="welcome">
            <p ref={subTitle}>Hey I'm Rohit! Welcome to my </p>
            <h1 ref={titleRef} className="mt-7">Portfolio</h1>
            <div className="small-screen">
                <p>This Portfolio is designed for desktop/tablet screens only.</p>
            </div>
        </section>
    );
}
export default Welcome;