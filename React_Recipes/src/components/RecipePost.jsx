import { useParams } from "react-router-dom";
import food_api from "../helpers/food_api";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import {htmlToText} from "html-to-text"
import Navbar from "./Navbar";
import RelatedRecipes from "./RelatedReciped";
const RecipePost = () => {
    
    const {recipeId}=useParams()
    const {data,isPending,error}=useFetch(`${food_api.url}/recipes/${recipeId}/information?apiKey=${food_api.password}`)

    return ( <>
    
    {isPending && <Loader></Loader>}
    
    <Navbar></Navbar>
    <main className="main main-top">
    {/* {data} */}
    {data?(<>
    <section className="recipe-post">
    
    <h2>{data.title}</h2>
    <img src={data.image}></img>
    
    <p dangerouslySetInnerHTML={{__html:data.summary}}></p>
    <h3>Ingredients</h3>
    <hr></hr>
    <ul>
        {(data.extendedIngredients).map((el,index)=>(
            <li key={index}>{el.name}</li>
            ))}
    </ul>
    <h3>Method</h3><hr></hr>
    <div className="method" dangerouslySetInnerHTML={{__html:data.instructions}}>
    </div>
    
        </section>
    </>):(<> </>)}

    <h2>You may also like</h2>


    {/* </section> */}

    </main>
    <RelatedRecipes></RelatedRecipes>

    </> );
}
 
export default RecipePost;