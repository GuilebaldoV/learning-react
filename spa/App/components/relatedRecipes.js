import { ajax } from "../helpers/ajax.js";
import api from "../helpers/food_api.js";
import { recipeCard } from "./recipeCard.js";
import { section } from "./section.js";

export function relatedRecipes(id){
    const d=document;
    const $section=section('related')
    d.getElementById('root').appendChild($section)
    ajax({url:`${api.url}/recipes/${id}/similar?number=4&apiKey=${api.password}`,
    place:d.querySelector('.related'),
    cbSucces:(recipes)=>{
        recipes.forEach(element => {
            $section.innerHTML+=recipeCard(element)
        });

    }})
    return $section

}