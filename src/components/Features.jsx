import { useEffect, useRef, useState } from "react";
import FeaturesItem from "./FeaturesItem";

function Features() {
    const items = [
        {
            id: "01",
            title: "Track company-wide progress",
            description:
                "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
        },
        {
            id: "02",
            title: "Advanced built-in reports",
            description:
                "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
        },
        {
            id: "03",
            title: "Everything you need in one place",
            description:
                "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
        },
    ];
    const featureRef = useRef(null);
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
        observer.observe(featureRef.current);
    }, [entryObserver]);
    return (
        <section className="features py-3 d-flex align-center jc-between flex-column-sm" ref={featureRef}>
            <div className={`text-center feature__header ${visible}`}>
                <h2>What's differente about Manage?</h2>
                <p>
                    Manage provides all the functionality your team needs,
                    without the complexity. Our software is tailor-made for
                    modern digital product teams.
                </p>
            </div>
            <div className={`container feature__items mx-auto ${visible}`}>
                <FeaturesItem items={items} />
            </div>
        </section>
    );
}

export default Features;
