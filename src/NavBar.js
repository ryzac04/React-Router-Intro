import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to={"/soda"} className="NavBar-link">Soda</Link>
            <Link to={"/chips"} className="NavBar-link">Chips</Link>
            <Link to={"/candy"} className="NavBar-link">Candy</Link>
        </nav>
    )
}

export default NavBar;