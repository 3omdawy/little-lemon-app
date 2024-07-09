import MenuItemCard from './MenuItemCard';
import GreekSalad from '../img/Greek Salad.jpg';
import bruschetta from '../img/bruschetta.jpg';
import pasta from '../img/pasta.jpg';
import '../styles/global.css';
import '../styles/highlights.css';
import { Link } from 'react-router-dom';

function Highlights() {
    let menuItems = [
        { imgPath: GreekSalad, title: "Greek Salad", price: 12.99, description: "Our delicious salad is served with Feta cheese and peeled cucumber. Includes tomatoes, onions, olives, salt and oregano in the ingredients." },
        { imgPath: bruschetta, title: "Bruschetta", price: 7.99, description: "Delicious grilled bread rubbed with garlic and topped with olive oil and salt. Our Bruschetta includes tomato and cheese." },
        { imgPath: pasta, title: "Pasta", price: 6.99, description: "Delicious pasta for your delight." }
    ];
    return (
        <section id="highlights" className="container">
            <article style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <h1 className="section-title">Specials</h1>
                <button className='button' type="button" style={{ marginTop: "1rem" }}><Link to="/order">Order Online</Link></button>
            </article>
            <section id="menuItems">
                {menuItems.map(item => <MenuItemCard key={item.title} item={item} />)}
            </section>
        </section>
    );
}

export default Highlights;