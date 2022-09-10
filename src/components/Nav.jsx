function Nav({ items = "", classNames = "" }) {
    return (
        <nav className={classNames}>
            <ul className="d-flex flex-column-sm">
                {items.map((item, key) => (
                    <li key={key}>
                        <a href={item.url}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
