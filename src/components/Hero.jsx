import { useEffect, useRef, useState } from "react";
import image from "../assets/images/illustration-intro.svg";
import Button from "./Button";

function Hero() {
    const heroRef = useRef(null);
    const [visible, setVisible] = useState('');
    const [entryObserver, setEntryObserver] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setEntryObserver(entry.isIntersecting);
                if (entryObserver) {
                    setVisible("visible");
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.3,
            }
        );
        observer.observe(heroRef.current);
    }, [entryObserver]);


    return (
        <section className="hero py-3 container mx-auto"  ref={heroRef}>
            <div className="d-flex align-center flex-column-sm jc-between">
                <div className={`hero__img d-flex align-center jc-end ${visible}`}>
                    <img src={image} alt="Hero img" />
                </div>
                <div className={`hero__content text-center ${visible}`}>
                    <h1>Bring everyone together to build better products.</h1>
                    <p>
                        Manage makes it simple for software teams to plan
                        day-to-day tasks while keeping the larger team goals in
                        view.
                    </p>
                    <Button text="Get Started" classNames="btn btn-primary" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
