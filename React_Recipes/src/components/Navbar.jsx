import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav className="nav">
        <div className="logotype">
            <img src="/img/food.png"></img>
            <h3>Recipes&Drinks</h3>
        </div>
        <div className="nav-menu">
            <Link to="headerSearch/dessert">Dessert</Link>
            <Link to="headerSearch/snack">Snack</Link>
            <Link to="headerSearch/maincourse">Main Course</Link>
            <Link to="headerSearch/drinks">Drinks</Link>
        </div>
        </nav>
        </>
      );
}
 
export default Navbar;