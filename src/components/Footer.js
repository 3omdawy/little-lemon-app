import '../styles/global.css';
import '../styles/footer.css';
import logoImage from "../img/Asset 7@4x.png"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="container">
            <img src={logoImage} alt="Little Lemon logo" />
            <article>
                <h1 className="card-title">Doormat Navigation</h1>
                <nav>
                    <ul>
                        <li><Link to="/" className="highlight">Home</Link></li>
                        <li><Link to="/about" className="highlight">About</Link></li>
                        <li><Link to="/reserve" className="highlight">Reservations</Link></li>
                        {/*<li><Link to="/menu" className="highlight">Menu</Link></li>
                        <li><Link to="/order" className="highlight">Order online</Link></li>
                        <li><Link to="/login" className="highlight">Login</Link></li>*/}
                    </ul>
                </nav>
            </article>
            <article>
                <h1 className="card-title">Contact</h1>
                <nav>
                    <ul>
                        <li className="highlight">41b JK Street - City - Country</li>
                        <li className="highlight">+49 0123456789</li>
                        <li><a href="mailto: contactus@littlelemon.com" className="highlight">contactus@littlelemon.com</a></li>
                    </ul>
                </nav>
            </article>
            <article>
                <h1 className="card-title">Social Media Links</h1>
                <nav>
                    <ul>
                        <li><a href="https://facebook.com/" className="highlight">Facebook</a></li>
                        <li><a href="https://x.com/" className="highlight">X</a></li>
                        <li><a href="https://instagram.com/" className="highlight">Instagram</a></li>
                    </ul>
                </nav>
            </article>
        </footer>
    );
}

export default Footer;