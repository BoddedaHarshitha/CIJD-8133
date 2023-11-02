import { Link } from "react-router-dom";
const NavItems = () => (
    <div className="nav-items">
        <ul>
            <li><Link to= "/home">HOME</Link></li>
            <li><Link to ="/about">ABOUT US</Link></li>
            <li><Link to = "/contact">CONTACT</Link></li>
            <li><Link to = "/cart">CART</Link></li>
        </ul>
    </div>
);

export default NavItems;