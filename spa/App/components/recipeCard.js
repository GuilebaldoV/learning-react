import api from "../helpers/food_api.js";

export function recipeCard(props){
    let {image,title,id,imageType}=props;


    let url=image?image:`https://spoonacular.com/recipeImages/${id}-556x370.${imageType}`

    return `
    <article">
        <figure class="recipe-card" data-id=${id}>
            <a href="#/${id}"><img data-id=${id} src=${url}>
            <figcaption data-id=${id}>
                <p data-id=${id}>${title}</p>
             </figcaption>
             </a>
        </figure>
    </article>
    `            

}