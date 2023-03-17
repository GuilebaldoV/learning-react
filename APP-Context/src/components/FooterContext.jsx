import { useContext } from "react";
import LenguageContext from "../context/LenguajeContext";
import ThemeContext from "../context/ThemeContext";

const FooterContext = () => {
    const {theme}=useContext(ThemeContext)
    const {texts}=useContext(LenguageContext)

    return ( 
        <footer className={theme}>{texts.footer}</footer>
     );
}
 
export default FooterContext;