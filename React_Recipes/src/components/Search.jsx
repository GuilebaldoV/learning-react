import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import SearchResults from "./SearchResult";

const SearchSection = () => {
    const {search}=useParams()
    return ( <>
    <Navbar></Navbar>
    <main className="main main-top">
        <h2>Results for {search}</h2>
        <SearchResults></SearchResults>

    </main>
    
    </> );
}
 
export default SearchSection;