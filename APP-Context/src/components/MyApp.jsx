import Footer from "./Footer";
import Header from "./Headerr";
import Main from "./Main";
import { useState } from "react";

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



const initialTheme='light'
const MyPage = () => {
    const [theme, seTtheme] = useState(initialTheme);
    const [lenguage, setLenguage] = useState('es');
    const [texts, setTexts] = useState(translations[lenguage]);
    const [auth, setAuth] = useState(false);
    const handledTheme=(e)=>{
    console.log(e.target.value)
    if(e.target.value==='light')seTtheme('light')
    else seTtheme('dark')
}



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

const handleAuth=(e)=>{
    if(auth){
        setAuth(null)
    }else{
        setAuth(true)
    }
}

    return (<>
    <div className="my-page">
        <Header theme={theme} auth={auth} handleAuth={handleAuth} handleLenguage={handleLenguage} texts={texts} handledTheme={handledTheme}></Header>
        <Main theme={theme} auth={auth} texts={texts}></Main>
        <Footer theme={theme}texts={texts} ></Footer>
    </div>
    </>);
}
 
export default MyPage;