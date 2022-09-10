import Logo from "./Logo";
import IconHamburguer from "./IconHamburguer";
import Nav from "./Nav";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

function Header() {
    const items = [
        {
            text: "Pricing",
            url: "#",
        },
        {
            text: "Product",
            url: "#",
        },
        {
            text: "About Us",
            url: "#",
        },
        {
            text: "Careers",
            url: "#",
        },
        {
            text: "Community",
            url: "#",
        },
    ];
    const headerRef = useRef(null);
    const [visible, setVisible] = useState("");
    const [entryObserver, setEntryObserver] = useState(false);

    // Se activa al hacer scroll
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    });
    /* Verfica el posicionamiento del scroll */
    const isSticky = (e) => {
        const header = document.querySelector(".menu");
        const scrollTop = window.scrollY;
        scrollTop >= 1
            ? header.classList.add("sticky")
            : header.classList.remove("sticky");
    };

    useEffect(() => {
        setTimeout(() => {
            isSticky();
        }, 1000);
    }, []);

    /* Verifica si el elemento se muestra en el viewport para agregar la animación */
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
                threshold: 0.1,
            }
        );
        observer.observe(headerRef.current);
    }, [entryObserver]);

    /* Agrega la clase visible si se muestra en el viewport */
    let classNames = `menu container mx-auto ${visible}`;

    return (
        <header className={classNames} ref={headerRef}>
            <div className="d-flex align-center jc-between">
                <Logo />
                <IconHamburguer />
                <Nav
                    items={items}
                    classNames="menu__nav text-center container mx-auto"
                />
                <Button
                    text="Get Started"
                    classNames="btn btn-primary d-none-sm"
                />
            </div>
        </header>
    );
}

export default Header;
