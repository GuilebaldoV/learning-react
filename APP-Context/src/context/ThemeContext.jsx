import { useState } from "react";
import { createContext } from "react";

// crreando contexto
// tiene el wraper y un consumer
// uno que da otro que consume
const ThemeContext=createContext();
const initialTheme='light'
// este sera el que envuelva a todos los componentes que necesiten theme
const ThemeProvider=({children})=>{
    // valores que queremos almacenar
    const [theme, seTtheme] = useState(initialTheme);
    
    const handledTheme=(e)=>{
        console.log(e.target.value)
        if(e.target.value==='light')seTtheme('light')
        else seTtheme('dark')
    }
    const data={theme,handledTheme}

    return (<ThemeContext.Provider value={data}>
        {children}
    </ThemeContext.Provider>)
}
export {ThemeProvider};
export default ThemeContext; 