import { useState } from "react";
import { createContext } from "react";
// useState
const translations={
    es:{
        headerTitle:'Mi Aplicacion sin context',
        headerSubtitle:'Mi cabezera',
        headerLight:'Claro',
        headerDark:"Oscuro",
        buttonLogin:"Iniciar Sesion",
        buttonLogout:"Cerrar Sesion",
        mainWelcome:"Bienvenid@",
        mainHello:"Hola Usuari@",
        mainContent:"Mi contenido principal",
        footer:"Mi pie de pagina"
    },en:{
        headerTitle:'My app without context',
        headerSubtitle:'Mi header',
        headerLight:'light',
        headerDark:"dark",
        buttonLogin:"Log in",
        buttonLogout:"Log out",
        mainWelcome:"Welcome",
        mainHello:"Hello user",
        mainContent:"My main content",
        footer:"My footer"
    }

}

const LenguageContext=createContext();

const LenaguageProvider=({children})=>{    
    const [lenguage, setLenguage] = useState('es');
    const [texts, setTexts] = useState(translations[lenguage]);

    const handleLenguage=(e)=>{
        console.log("holas")
        console.log(e.target.value)
        if(e.target.value==='es'){
            setLenguage('es')
            setTexts(translations.es)
        }else {
            setLenguage('en')
            setTexts(translations.en)
        }
    }

    const data={lenguage,texts,handleLenguage}

    return (<LenguageContext.Provider value={data}>{children}</LenguageContext.Provider>)

}

export {LenaguageProvider};
export default LenguageContext;