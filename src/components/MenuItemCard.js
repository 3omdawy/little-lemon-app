import '../styles/global.css';

function MenuItemCard(props) {
    return (
        <article style={{ flex: "1", marginTop: "2rem" }}>
            <img src={props.item.imgPath} alt={"Image for " + props.item.title} />
            <section className="card-body">
                <article style={{ display: "flex", marginBottom: "1rem", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <h2 className="card-title">{props.item.title}</h2>
                    <p className="highlight"><span className="price">${props.item.price}</span></p>
                </article>
                <p className="card-paragraph" style={{ color: "var(--primary-green)" }}>{props.item.description}</p>
            </section>
        </article >
    );
}

export default MenuItemCard;