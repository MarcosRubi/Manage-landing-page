import { useEffect, useRef, useState } from "react";
import Button from "./Button";

function Banner() {
    const bannerRef = useRef(null);
    const [visible, setVisible] = useState("");
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
        observer.observe(bannerRef.current);
    }, [entryObserver]);
    return (
        <section className={`banner py-3 d-flex align-center jc-center ${visible}`} ref={bannerRef}>
            <div>
                <h2 className="text-center">
                    Simplify how your team works today.
                </h2>
                <Button
                    text="Get Started"
                    classNames="btn btn-secondary mx-auto d-block"
                />
            </div>
        </section>
    );
}

export default Banner;
