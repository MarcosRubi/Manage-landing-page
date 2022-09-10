function IconHamburguer() {
    const toggleMenu = () => {
        document.querySelector(".icon-hamburguer").classList.toggle("active");
        document.querySelector(".menu__nav").classList.toggle("active");
    };

    return <div className="icon-hamburguer" onClick={toggleMenu}></div>;
}

export default IconHamburguer;
