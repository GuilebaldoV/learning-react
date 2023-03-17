import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav className="nav">
        <div className="logotype">
            <img src="/img/food.png"></img>
            <Link to="/">
            <h3>Recipes&Drinks</h3>
            </Link>
        </div>
        {/* <div className="nav-menu">
            <Link to="/type/Dessert">Dessert</Link>
            <Link to="/type/Snack">Snack</Link>
            <Link to="/type/Main course">Main Course</Link>
            <Link to="/type/Drinks">Drinks</Link>
        </div> */}
        </nav>
        </>
      );
}
 
export default Navbar;