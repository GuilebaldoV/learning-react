import { useParams } from "react-router-dom";
import HeaderType from "./HeaderType";
import SearchResults from "./SearchResult";

const TypeSection = () => {

    return (<>
    <HeaderType></HeaderType>        
    <main className="main main-top">
        <SearchResults></SearchResults>
    </main>
    </>);
}
 
export default TypeSection;