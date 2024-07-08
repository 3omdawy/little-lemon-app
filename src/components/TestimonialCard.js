import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import '../styles/global.css';
import '../styles/testimonials.css';

function TestimonialCard(props) {
    function drawRating() {
        let i = 1;
        let ret = [];
        for (i = 1; i <= 5; i++) {
            if (i <= props.item.rating) ret.push(<FontAwesomeIcon key={i} icon={faStar} size="1x" className="checked" />);
            else ret.push(<FontAwesomeIcon key={i} icon={faStar} size="1x" />);
        }
        return ret;
    }
    return (
        <article>
            <img src={props.item.imgPath} alt="" />
            <p className="highlight">{props.item.userName}</p>
            <div>
                {drawRating()}
            </div>
            <p className="card-paragraph">{props.item.review}</p>
        </article>
    );
}

export default TestimonialCard;