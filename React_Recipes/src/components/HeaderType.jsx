import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
const HeaderType = () => {
    const {type}=useParams()
    let typname=type.toLowerCase()
    if(typname==='main course'){
        typname='main-curse'
    }
        
    const address=`url(/img/header-${typname}.jpg)`
    console.log(address)
    return (
        <header className="header">
            <Navbar></Navbar>
            <div className="hero-image" style={{backgroundImage:address}}>
                <div className="background" >
                    <div className="titles title-header">
                    <h2>{type}</h2>
                    </div>
                </div>  
            </div>
        </header>

      );
}
 
export default HeaderType;