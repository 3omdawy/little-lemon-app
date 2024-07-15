import { Link } from "react-router-dom";
import Logo from "../img/Logo.svg"
import '../styles/global.css';
import '../styles/header.css';

function Navigation() {
    let navLinks = [
        /*{ path: "/", text: "Home", class: "hideOnMobile" },
        { path: "/order", text: "Order Online", class: "" },
        { path: "/login", text: "Login", class: "hideOnMobile" },
        { path: "/menu", text: "Menu", class: "" },*/
        { path: "/about", text: "About", class: "" },
        { path: "/reserve", text: "Reservations", class: "" },
    ];
    return (
        <header id="header" style={headerStyles.container} className="container">
            <Link to="/">
                <img src={Logo} alt="Little lemon logo" style={headerStyles.image}></img>
            </Link>
            <nav>
                <ul style={headerStyles.navbar}>
                    {navLinks.map(item => <li key={item.text} style={headerStyles.navitem} className={item.class}><Link to={item.path} style={headerStyles.navlink} className="section-title">{item.text}</Link></li>)}
                </ul>
            </nav>
        </header >
    );
}

const headerStyles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        listStyle: "none",
    },
    navitem: {
        paddingLeft: "1rem",
        textAlign: "center"
    },
    navlink: {
        textTransform: "uppercase",
        textDecoration: "none",
    }
};

export default Navigation;