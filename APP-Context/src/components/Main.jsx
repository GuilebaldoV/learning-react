const Main = ({theme,texts,auth}) => {
    return (
        
        <main className={theme}>
            {auth?<p>{texts.mainHello}</p>:<>{texts.mainWelcome}</>}
            {/* <p>{texts.mainWelcome}</p> */}
            {/* <p>{texts.mainHello}</p> */}
        <p>{texts.mainContent}</p>
    </main>

     );
}
 
export default Main;