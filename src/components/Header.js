import Logo from "../img/Logo.svg"

function Navigation() {
    return (
        <header style={headerStyles.container}>
            <img src={Logo} alt="Little lemon logo" style={headerStyles.image}></img>
            <nav style={{width: "100%"}}>
                <ul style={headerStyles.navbar}>
                    <li style={headerStyles.navitem}><a href="/#hero" style={headerStyles.navlink}>Home</a></li>
                    <li style={headerStyles.navitem}><a href="/#about" style={headerStyles.navlink}>About</a></li>
                    <li style={headerStyles.navitem}><a href="/#highlights" style={headerStyles.navlink}>Menu</a></li>
                    <li style={headerStyles.navitem}><a href="/#hero" style={headerStyles.navlink}>Reservations</a></li>
                    <li style={headerStyles.navitem}><a href="/#highlights" style={headerStyles.navlink}>Order Online</a></li>
                    <li style={headerStyles.navitem}><a href="/#hero" style={headerStyles.navlink}>Login</a></li>
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
        padding: "20px",
    },
    image: {
        width: "148px",
        height: "48px",
    },
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        listStyle: "none",
    },
    navitem: {
        padding: "1.5%",
        textAlign: "center"
    },
    navlink: {
        textTransform: "uppercase",
        textDecoration: "none",
    }
};

export default Navigation;