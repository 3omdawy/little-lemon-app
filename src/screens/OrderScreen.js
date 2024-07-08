import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderOnline from '../components/OrderOnline';
import Highlights from '../components/Highlights';

function OrderScreen() {
    return (
        <>
            <Header></Header>
            <main>
                <OrderOnline />
                <Highlights />
            </main>
            <Footer></Footer>
        </>
    );
}

export default OrderScreen;