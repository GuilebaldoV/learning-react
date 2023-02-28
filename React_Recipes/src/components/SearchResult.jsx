import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import axios from "axios"
import food_api from "../helpers/food_api";
import { useParams } from "react-router-dom";

const SearchResults = () => {
    const [data, setData] = useState([]);
    const [offset,setOffset]=useState(0)
    const {search}=useParams()

    const handleLoadMore=()=>{
        setOffset(offset+12)
    }
    useEffect(() => {
        console.log("hola")
        const fetchRecipes= async ()=>{
            const link=`${food_api.url}/recipes/complexSearch?query=${search}&offset=${offset}&number=12&apiKey=${food_api.password}`
            const response=await axios.get(link)
            console.log(link,response)
            

        }
        fetchRecipes()
    }, [offset]);


    return ( <>
        <button onClick={handleLoadMore}>f</button>
    </> );
}
 
export default SearchResults;