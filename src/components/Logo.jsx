import logo from "../assets/images/logo.svg";

function Logo({ url = "#", classNames = "logo" }) {
    return (
        <a href={url} className={classNames}>
            <img src={logo} alt="Logo manage" className="d-flex align-center"/>
        </a>
    );
}

export default Logo;
