import { Link } from "react-router-dom";
import "./Soda.css";

const Soda = () => {
    return (
        <div className="Soda">
            <img
                className="Soda-pic"
                src="https://i.giphy.com/ky8QnJeK2PI2HATkTq.gif"
                alt="Coca-cola bottles"
            />
            <div className="Soda-text">
                <p>Refreshing!</p>
                <Link to={"/"}>Go Back</Link>
            </div>
        </div>
    )
}

export default Soda;