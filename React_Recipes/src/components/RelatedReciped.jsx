import { useParams } from "react-router-dom"
import food_api from "../helpers/food_api"
import {useFetch} from "../hooks/useFetch"
import Loader from "./Loader"
import RecipeCard from "./recipe-card"

const RelatedRecipes = () => {
    const {recipeId}=useParams()
    const {data,error,isPending}=useFetch(`${food_api.url}/recipes/${recipeId}/similar?number=4&apiKey=${food_api.password}`)
    

    console.log(data)
    return ( 
        <>
        <section className="related">
        {isPending && <Loader></Loader>}
        {data && data.map((el,index)=>(
            <RecipeCard key={index} props={el}></RecipeCard>))}
        </section>
        </>
            
     );
}
 
export default RelatedRecipes;