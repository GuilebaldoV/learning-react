import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderrContext";
import MainContext from "./MainContext";
import { useState } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { LenaguageProvider } from "../context/LenguajeContext";
import { AuthProvider } from "../context/AuthContext";

    // const translations={
    //     es:{
    //         headerTitle:'Mi Aplicacion context',
    //         headerSubtitle:'Mi cabezera',
    //         headerLight:'Claro',
    //         headerDark:"Oscuro",
    //         buttonLogin:"Iniciar Sesion",
    //         buttonLogout:"Cerrar Sesion",
    //         mainWelcome:"Bienvenid@",
    //         mainHello:"Hola Usuari@",
    //         mainContent:"Mi contenido principal",
    //         footer:"Mi pie de pagina"
    //     },en:{
    //         headerTitle:'My app with context',
    //         headerSubtitle:'Mi header',
    //         headerLight:'light',
    //         headerDark:"dark",
    //         buttonLogin:"Log in",
    //         buttonLogout:"Log out",
    //         mainWelcome:"Welcome",
    //         mainHello:"Hello user",
    //         mainContent:"My main content",
    //         footer:"My footer"
    //     }

    // }



const MyPageContext = () => {
    // const [lenguage, setLenguage] = useState('es');
    // const [texts, setTexts] = useState(translations[lenguage]);
    // const [auth, setAuth] = useState(false);



// const handleLenguage=(e)=>{
//     console.log("holas")
//     console.log(e.target.value)
//     if(e.target.value==='es'){
//         setLenguage('es')
//         setTexts(translations.es)
//     }else {
//         setLenguage('en')
//         setTexts(translations.en)
//     }
// }

// const handleAuth=(e)=>{
//     if(auth){
//         setAuth(null)
//     }else{
//         setAuth(true)
//     }
// }

    return (<>
    <div className="my-page">
        <AuthProvider>
        <LenaguageProvider>
            <ThemeProvider>
                <HeaderContext  ></HeaderContext>
                <MainContext></MainContext>
                <FooterContext ></FooterContext>
            </ThemeProvider>
        </LenaguageProvider>
        </AuthProvider>
    </div>
    </>);
}
 
export default MyPageContext;