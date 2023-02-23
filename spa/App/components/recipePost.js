import { relatedRecipes } from "./relatedRecipes.js";
import { section } from "./section.js";
import { subtitle } from "./subtitle.js";

export function recipePost(props){
    let {title,id,_embedded,summary,image,instructions,extendedIngredients}=props;
    const $section=section('recipe-post')
    const $list=document.createElement('ul')
    
    $section.appendChild(subtitle(title))
    $section.innerHTML+=`
    <img src="${image}">
    
    <p>${summary}</p>
    <h3>Ingredients</h3>
    <hr>
    `
    extendedIngredients.forEach(element => {
        let $listElement=document.createElement('li')
        $listElement.innerHTML=`${element.name}`
        $list.appendChild($listElement)
    });
    $section.appendChild($list)

    $section.innerHTML+=`
        <h3>Method</h3>
        <hr>
        `
    const $div=document.createElement('div')
    if (!(instructions[0]=='<')){
        $div.classList.add('method')
    }
    $div.innerHTML=instructions
    $section.appendChild($div)
    
    $section.appendChild(subtitle('You may also like'))

    relatedRecipes(id)
    
    return $section
}






