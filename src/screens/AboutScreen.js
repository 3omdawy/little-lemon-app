import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

function AboutScreen() {
    return (
        <>
            <Header></Header>
            <main>
                <About></About>
                <Testimonials></Testimonials>
            </main>
            <Footer></Footer>
        </>
    );
}

export default AboutScreen;