import { Link } from "react-router-dom";
import "./Candy.css"

const Candy = () => {
    return (
        <div className="Candy">
            <img
                className="Candy-pic"
                src="https://i.giphy.com/106EGwK7KpwbCg.gif" 
                alt="Snickers Bar"
            />
            <div className="Candy-text">
                <p>Good Choice!</p>
                <Link to={"/"}>Go Back</Link>
            </div>
        </div>
    )
}

export default Candy;


