import Header from '../components/Header';
import Footer from '../components/Footer';
import ReserveTable from '../components/ReserveTable';

function BookingPage() {
    return (
        <>
            <Header></Header>
            <main>
                <ReserveTable />
            </main>
            <Footer></Footer>
        </>
    );
}

export default BookingPage;