import '../styles/global.css';
import '../styles/testimonials.css';
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
    let userRatings = [
        { rating: 5, imgPath: "https://randomuser.me/api/portraits/men/1.jpg", userName: "John Smith", review: "This is a wonderful restaurant, really amazing!" },
        { rating: 4, imgPath: "https://randomuser.me/api/portraits/women/2.jpg", userName: "Alexa Martin", review: "The atmosphere is breath taking!!" },
        { rating: 5, imgPath: "https://randomuser.me/api/portraits/men/2.jpg", userName: "Martin Adams", review: "I love the grilled chicken, it was delicious" },
        { rating: 5, imgPath: "https://randomuser.me/api/portraits/women/50.jpg", userName: "Roberta Adams", review: "The staff is really helpful" },
    ];

    return (
        <section id="testimonials" className="container">
            <h1 className="display">Testimonials</h1>
            <section id="testimonialGrid">
                {userRatings.map(item => <TestimonialCard key={item.userName} item={item} />)}
            </section>
        </section>
    );
}

export default Testimonials;