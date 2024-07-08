import '../styles/global.css';
import '../styles/footer.css';
import logoImage from "../img/Asset 7@4x.png"

function Footer() {
    return (
        <footer className="container">
            <img src={logoImage} alt="Little Lemon logo" />
            <article>
                <span className="card-title">Doormat Navigation</span>
                <nav>
                    <ul>
                        <li><a href="/#home" className="highlight">Home</a></li>
                        <li><a href="/#home" className="highlight">About</a></li>
                        <li><a href="/#home" className="highlight">Menu</a></li>
                        <li><a href="/#home" className="highlight">Reservations</a></li>
                        <li><a href="/#home" className="highlight">Order online</a></li>
                        <li><a href="/#home" className="highlight">Login</a></li>
                    </ul>
                </nav>
            </article>
            <article>
                <span className="card-title">Contact</span>
                <nav>
                    <ul>
                        <li><a href="/#home" className="highlight">Address</a></li>
                        <li><a href="/#home" className="highlight">Phone number</a></li>
                        <li><a href="/#home" className="highlight">Email</a></li>
                    </ul>
                </nav>
            </article>
            <article>
                <span className="card-title">Social Media Links</span>
                <nav>
                    <ul>
                        <li><a href="/#home" className="highlight">Facebook</a></li>
                        <li><a href="/#home" className="highlight">X</a></li>
                        <li><a href="/#home" className="highlight">Instagram</a></li>
                    </ul>
                </nav>
            </article>
        </footer>
    );
}

export default Footer;