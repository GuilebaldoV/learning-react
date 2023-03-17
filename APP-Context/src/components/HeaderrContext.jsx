import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LenguageContext from "../context/LenguajeContext";
import ThemeContext from "../context/ThemeContext";

const HeaderContext= () => {
    // usando el contexto
    const {theme,handledTheme}=useContext(ThemeContext)
    const {lenguage,texts,handleLenguage}=useContext(LenguageContext)
    const {auth,handleAuth}=useContext(AuthContext)
    return (
        <header className={theme}>
            <h1>holas</h1>
        <h2>{texts.headerTitle}</h2>
        <h3>{texts.headerSubtitle}</h3>
        <select name='language' onChange={handleLenguage}>
            <option value='es'>ES</option>
            <option value='en'>EN</option>
        </select>
        {/* <h1>hpña</h1> */}
        <input type='radio' name='theme' id='lightContext' value='light' onClick={handledTheme}></input>
        <label htmlFor="lightContext">{texts.headerLight}</label>
        <input type='radio' name='theme' id='darkContext' value='dark' onClick={handledTheme
        }></input>
        <label htmlFor="darkContext">{texts.headerDark}</label>
        <button onClick={handleAuth}>{auth?texts.buttonLogout:texts.buttonLogin}</button>
    </header>
      );
}
 
export default HeaderContext;