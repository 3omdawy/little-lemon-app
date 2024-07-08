import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function HomeScreen() {
    return (
        <>
            <Header></Header>
            <main>
                <Hero></Hero>
                <Highlights></Highlights>
                <Testimonials></Testimonials>
                <About></About>
            </main>
            <Footer></Footer>
        </>
    );
}

export default HomeScreen;