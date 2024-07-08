import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';

function MenuScreen() {
    return (
        <>
            <Header></Header>
            <main>
                <Hero></Hero>
                <Highlights></Highlights>
            </main>
            <Footer></Footer>
        </>
    );
}

export default MenuScreen;