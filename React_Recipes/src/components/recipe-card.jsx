import {Link} from 'react-router-dom'

const RecipeCard = ({props}) => {
    // console.log(props)
    window.scrollTo(0,0)
    let url=props.image?props.image:`https://spoonacular.com/recipeImages/${props.id}-556x370.${props.imageType}`
    return ( 
        <article>
            <figure className="recipe-card">
            <Link to={`/recipe/${props.id}`} >
            <img src={url}></img>
            <figcaption>
                <p>{props.title}</p>
            </figcaption> 
            </Link>
            </figure>
        </article>
     );
}
 
export default RecipeCard;