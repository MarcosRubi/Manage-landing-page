function Button({ text = "Button", classNames = "btn" }) {
    return <button className={classNames}>{text}</button>;
}

export default Button;
