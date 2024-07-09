import '../styles/global.css';
import '../styles/about.css';
import Image from "../img/MarioAdrian.png";

function About() {
    return (
        <section id="about" className="container">
            <section>
                <h1 className="display">Little Lemon</h1>
                <h3 className="subtitle" style={{ color: "var(--highlight-dark)" }}>Chicago</h3>
                <p className="card-paragraph" style={{ marginTop: "1rem", color: "var(--primary-green)" }}>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
            </section>
            <img src={Image} alt="" role='img'></img>
        </section>
    );
}

export default About;