import Comment from "./Comment";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

function Comments() {
    const comments = [
        {
            img: "user1",
            name: "Anisha Li",
            comment:
                "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
        },
        {
            img: "user2",
            name: "Ali Bravo",
            comment:
                "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
        },
        {
            img: "user3",
            name: "Richard Watts",
            comment:
                "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
        },
        {
            img: "user4",
            name: "Shanai Gough",
            comment:
                "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
        },
    ];
    function transtale(id) {
        const itemActiveControl = document.querySelector(
            ".comments__controls li.active"
        );
        itemActiveControl.classList.remove("active");

        const itemActive = document.querySelector(".comment.show");
        itemActive.classList.remove("show");

        const newItemActive = document.getElementById("comment-control-" + id);
        newItemActive.classList.add("active");

        const commentItem = document.getElementById("comment-" + id);
        commentItem.classList.add("show");
    }
    const commentsRef = useRef(null);
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
        observer.observe(commentsRef.current);
    }, [entryObserver]);
    return (
        <section className="comments py-3" ref={commentsRef}>
            <h2 className={`text-center comment-title ${visible}`}>
                What they've said
            </h2>
            <div className={`d-flex align-center comments-container ${visible}`}>
                <Comment comments={comments} />
            </div>
            <ul className="comments__controls d-flex align-center jc-center">
                <li
                    className="active"
                    onClick={() => {
                        transtale(0);
                    }}
                    id="comment-control-0"
                ></li>
                <li
                    onClick={() => {
                        transtale(1);
                    }}
                    id="comment-control-1"
                ></li>
                <li
                    onClick={() => {
                        transtale(2);
                    }}
                    id="comment-control-2"
                ></li>
                <li
                    onClick={() => {
                        transtale(3);
                    }}
                    id="comment-control-3"
                ></li>
            </ul>
            <Button
                text="Get Started"
                classNames={`btn btn-primary mx-auto d-block ${visible}`}
            />
        </section>
    );
}

export default Comments;
