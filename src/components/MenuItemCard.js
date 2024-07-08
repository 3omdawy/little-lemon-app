import '../styles/global.css';

function MenuItemCard(props) {
    return (
        <article style={{ flex: "1", marginTop: "2rem" }}>
            <img src={props.item.imgPath} alt={"Image for " + props.item.title} />
            <div className="card-body">
                <div style={{ display: "flex", marginBottom: "1rem", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <h3 className="card-title">{props.item.title}</h3>
                    <p className="highlight"><span className="price">${props.item.price}</span></p>
                </div>
                <p className="card-paragraph" style={{ color: "var(--primary-green)" }}>{props.item.description}</p>
            </div>
        </article >
    );
}

export default MenuItemCard;