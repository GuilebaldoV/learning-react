const Header = ({theme, handledTheme,handleLenguage,texts,auth,handleAuth}) => {
    return (
        <header className={theme}>
        <h2>{texts.headerTitle}</h2>
        <h3>{texts.headerSubtitle}</h3>
        <select name='language' onChange={handleLenguage}>
            <option value='es'>ES</option>
            <option value='en'>EN</option>
        </select>
        {/* <h1>hpña</h1> */}
        <input type='radio' name='theme' id='light' value='light' onClick={handledTheme}></input>
        <label htmlFor="light">{texts.headerLight}</label>
        <input type='radio' name='theme' id='dark' value='dark' onClick={handledTheme
        }></input>
        <label htmlFor="dark">{texts.headerDark}</label>
        <button onClick={handleAuth}>{auth?texts.buttonLogout:texts.buttonLogin}</button>
    </header>
      );
}
 
export default Header;