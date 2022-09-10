import Button from "./Button";
import Nav from "./Nav";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconYoutube from "../assets/images/icon-youtube.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconPinterest from "../assets/images/icon-pinterest.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";

function Footer() {
    const items1 = [
        {
            text: "Home",
            url: "#",
        },
        {
            text: "Pricing",
            url: "#",
        },
        {
            text: "Products",
            url: "#",
        },
        {
            text: "About Us",
            url: "#",
        },
    ];
    const items2 = [
        {
            text: "Careers",
            url: "#",
        },
        {
            text: "Community",
            url: "#",
        },
        {
            text: "privacy Policy",
            url: "#",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const input = document.getElementById("txtEmail");
        const labelInput = document.querySelector(".input-group label");
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!regex.test(input.value)) {
            input.classList.add("error");
            labelInput.classList.add("error");
            labelInput.innerHTML = "Updates in your inbox - Email no valid";
            return;
        }
        input.classList.remove("error");
        labelInput.classList.remove("error");
        labelInput.innerHTML = "Updates in your inbox";
    };

    const footerRef = useRef(null);
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
        observer.observe(footerRef.current);
    }, [entryObserver]);
    return (
        <>
            <footer ref={footerRef}>
                <div className={`container mx-auto ${visible}`}>
                    <form
                        action="#"
                        className="d-flex align-center mx-auto"
                        onSubmit={handleSubmit}
                    >
                        <div className="input-group">
                            <input
                                type="email"
                                name="txtEmail"
                                id="txtEmail"
                                required="required"
                            />
                            <label htmlFor="txtEmail">
                                Updates in your inbox
                            </label>
                        </div>
                        <Button text="Go" classNames="btn btn-primary" />
                    </form>
                </div>
                <div className={`nav__content d-flex jc-between ${visible}`}>
                    <Nav items={items1} />
                    <Nav items={items2} />
                </div>
                <div className={`d-flex flex-column mx-auto ${visible}`}>
                    <ul className="social-icons d-flex jc-center align-center mx-auto">
                        <li>
                            <a href="#">
                                <img src={iconFacebook} alt="Icon Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={iconYoutube} alt="Icon Youtube" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={iconTwitter} alt="Icon Twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={iconPinterest} alt="Icon Pinterest" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={iconInstagram} alt="Icon Instagram" />
                            </a>
                        </li>
                    </ul>
                    <Logo
                        url="#"
                        classNames="footer-logo d-flex jc-center py-3 filter-invert logo mx-auto"
                    />
                </div>
            </footer>
            <div className={`copy jc-end d-flex`}>
                <p className={visible}>Copyright 2020. All Rights Reserved</p>
            </div>
            <div className="attribution text-center">
                <p className={visible}>
                    Challenge by{" "}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by{" "}
                    <a href="https://mrubi.vercel.app/" target="_blank">
                        Marcos Rubí
                    </a>
                    .
                </p>
            </div>
        </>
    );
}

export default Footer;
