import '../styles/global.css';
import '../styles/booking.css';
import Image from "../img/reserve-image.jpg";
import BookingForm from './BookingForm';

function ReserveTable() {
    return (
        <section className='container' id="reserveTable">
            <h1 className="display">Reserve a table!</h1>
            <p className='lead'>Want to enjoy a private family meal? 😉
                Having quality time with family or friends? 💞
                Chilling out with colleagues on a special occasion?
                <br />
                <strong>Little Lemon is the right place 🎯</strong>
            </p>
            <div className="reserve-hero">
                <img src={Image} alt="Our customer enjoying their stay after booking their tables"></img>
                <BookingForm />
            </div>
        </section>
    );
}

export default ReserveTable;