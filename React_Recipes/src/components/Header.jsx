import HeroImage from "./HeroImage";
import Navbar from "./Navbar";

const Header = () => {
    return ( <>
    <header className="header">
        <Navbar></Navbar>
        <HeroImage></HeroImage>
    </header>
    </> );
}
 
export default Header;