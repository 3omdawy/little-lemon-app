import '../styles/global.css';
import '../styles/hero.css';
import HeroImage from "../img/restauranfood.jpg";
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section id="hero" className="container">
            <section>
                <h1 className="display">Little Lemon</h1>
                <h3 className="subtitle">Chicago</h3>
                <p className="card-paragraph" style={{ marginTop: "1rem" }}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <div style={{ marginTop: "2rem" }}>
                    <Link to="/reserve" className='button' type="button" style={{ marginTop: "1rem" }}>Reserve a table</Link>
                </div>
            </section>
            <img src={HeroImage} alt=""></img>
        </section>
    );
}

export default Hero;