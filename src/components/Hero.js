import '../styles/global.css';
import '../styles/hero.css';
import HeroImage from "../img/restauranfood.jpg";
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section id="hero" className="container">
            <section>
                <h1 className="display">Little Lemon</h1>
                <h2 className="subtitle">Chicago</h2>
                <p className="card-paragraph" style={{ marginTop: "1rem" }}>
                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                </p>
                <button className='button' type="button" style={{ marginTop: "3rem" }}>
                    <Link data-testid="reserve-link" to="/reserve">Reserve a table</Link>
                </button>
            </section>
            <img src={HeroImage} alt=""></img>
        </section>
    );
}

export default Hero;