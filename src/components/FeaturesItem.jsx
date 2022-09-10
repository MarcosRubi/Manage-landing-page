function FeaturesItem({
    items = [{ id: "00", title: "title", description: "description" }],
}) {
    return (
        <>
            {items.map((item, key) => {
                return (
                    <div className="feature" key={key}>
                        <div className="d-flex align-center">
                            <span className="feature-id">{item.id}</span>
                            <p className="feature-title">{item.title}</p>
                        </div>
                        <p className="feature-description">{item.description}</p>
                    </div>
                );
            })}
        </>
    );
}

export default FeaturesItem;
