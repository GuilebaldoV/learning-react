import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import axios from "axios"
import food_api from "../helpers/food_api";
import { useNavigate, useParams } from "react-router-dom";
import RecipeCard from "./recipe-card";
import Loader from "./Loader";
import Error from "./Error";

const SearchResults = ({by}) => {
    
 
    // https://api.spoonacular.com/recipes/complexSearch?query=app&offset=12&number=12&apiKey=6d7fed34cda147ac918a4f75b86ab59d
    // https://api.spoonacular.com/recipes/complexSearch?type=main%20course&offset=0&number=12&apiKey=6d7fed34cda147ac918a4f75b86ab59d
    const [data, setData] = useState([]);
    const [offset,setOffset]=useState(0);
    const [error, setError] = useState(false);
    const [isPending, setisPending] = useState();
    const [button,setButton]=useState(true)
    const {search}=useParams()
    const {type}=useParams()
    const navigator=useNavigate()
    const link=search? `${food_api.url}/recipes/complexSearch?query=${search}&offset=${offset}&number=12&apiKey=${food_api.password}`
    : `${food_api.url}/recipes/complexSearch?type=${type}&offset=${offset}&number=12&apiKey=${food_api.password}`
   
    

    const handleLoadMore=()=>{
        setOffset(offset+12)
    }

    const handleBack=()=>{
        navigator("/")
    }

    useEffect(() => {

        setisPending(true)
        console.log("effect")
        const fetchRecipes= async ()=>{

            await axios.get(link)
            .then( (response)=>{
                console.log(response.data)
                setData([...data,...response.data.results])
                console.log(data,"data")
                if (data.length===0 && (response.data.results).length===0){
                    setButton(false)
                    setError({status:"204",statusText:"No recipes found"})
                }

                if((response.data.results).length<12)setButton(false)


            })
            .catch((err)=>{
                setError(err)
            })
            setisPending(false)            
        }
        fetchRecipes()
    }, [offset]);


    return ( <>
        <section className="recipe-section">
        {data && data.map((item,index)=>(
            <RecipeCard key={index} props={item}></RecipeCard>
            ))}
        </section>
        {error && <Error props={error}></Error>}
        {isPending && <Loader></Loader>}
        <section className="button-container">
        {/* {button &&  <button className="button" onClick={handleLoadMore}>More recipies</button>} */}
        {button?(<button className="button" onClick={handleLoadMore}>More recipies</button>)
        :(<button className="button-back button" onClick={handleBack}>Go back</button>)}
        </section>
    </> );
}
 
export default SearchResults;