import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
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

export default App;
