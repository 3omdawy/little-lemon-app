import Logo from "../img/Logo.svg"
import '../styles/global.css';
import '../styles/header.css';

function Navigation() {
    let navLinks = [
        { path: "/#hero", text: "Home", class: "hideOnMobile" },
        { path: "/#about", text: "About", class: "hideOnMobile" },
        { path: "/#highlights", text: "Menu", class: "" },
        { path: "/#hero", text: "Reservations", class: "" },
        { path: "/#highlights", text: "Order Online", class: "" },
        { path: "/#hero", text: "Login", class: "hideOnMobile" },
    ];
    return (
        <header style={headerStyles.container} className="container">
            <img src={Logo} alt="Little lemon logo" style={headerStyles.image}></img>
            <nav>
                <ul style={headerStyles.navbar}>
                    {navLinks.map(item => <li key={item.text} style={headerStyles.navitem} className={item.class}><a href={item.path} style={headerStyles.navlink} className="section-title">{item.text}</a></li>)}
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