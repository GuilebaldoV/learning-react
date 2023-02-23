// siempre darle el alias
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

const Home = () => {
    return (
      <>
        <h3>Home page</h3>
        <p>Home content</p>
      </>
    );
  };
  
  const About = () => {
    return (
      <>
        <h3>About us</h3>
        <p>About content</p>
      </>
    );
  };
  
  const Contact = () => {
    return (
      <>
        <h3>Contact us</h3>
        <p>Contact content</p>
      </>
    );
  };

const ConceptosBasicos = () => {
    return ( 
        <div>
            <h2>Conceptos Basicos</h2>
            {/* router */}
            <Router>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/acerca" element={<About></About>}></Route>
                    <Route path="/contact" element={<Contact></Contact>}></Route>

                </Routes>
            </Router>
        </div>
     );
}
 
export default ConceptosBasicos;