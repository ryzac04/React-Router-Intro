import { Link } from "react-router-dom";
import "./Chips.css";

const Chips = () => {
    const counter = 0;

    return (
        <div className="Chips">
            <img
                className="Chips-pic"
                src="https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Chips"
            />
            <div className="Chips-text">
                <p>Nom Nom Nom!</p>
                <Link to={"/"}>Go Back</Link>
            </div>

        </div>
    )
}

export default Chips;