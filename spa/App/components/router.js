import { ajax } from "../helpers/ajax.js";
import { loader } from "./louder.js";
import { SearchForm } from "./searchform.js";
import { section } from "./section.js";
import api from '../helpers/food_api.js'
import { recipeCard } from "./recipeCard.js";
import { subtitle } from "./subtitle.js";
import { Menu } from "./optionsMenu.js";
import { Header } from "./header.js";
import { nav } from "./nav.js";
import { recipePost } from "./recipePost.js";
import { button } from "./button.js";

export async function router(){
    const d=document,
    $root=d.getElementById('root')
    api.offset=0
    let {hash}=location
    const $main=document.querySelector('main')
    if(!hash||hash=='#/'){
        d.getElementById('root').insertAdjacentElement('afterbegin',Header())
        $main.appendChild(SearchForm())
        $main.appendChild(loader())
        $main.appendChild(section('random'))
        await ajax({url:`${api.url}/recipes/random?number=8&apiKey=${api.password}`,
            place:d.querySelector('.random'),
            cbSucces:(recipes)=>{
                recipes.recipes.forEach(element => {
                    d.querySelector('.random').innerHTML+=recipeCard(element)
                    d.querySelector('.loader').style.display="none"
    
                });
            }})
        $main.appendChild(subtitle('What are you looking for?'))
        $main.appendChild(Menu())
    }else if (hash.includes('#/search')) {     
        scroll(0,0)
        d.getElementById('root').insertAdjacentElement('afterbegin',nav())
        $main.classList.add('main-top')
        $main.appendChild(subtitle(`Results for ${localStorage.getItem('foodSearch')}`))
        $main.appendChild(loader())
        d.getElementsByTagName('h2')[0].classList.add('font-100')
        $main.appendChild(section('recipe-section'))
        d.querySelector('.recipe-section')
        await ajax({url:`${api.url}/recipes/complexSearch?query=${localStorage.getItem('foodSearch')}&number=12&apiKey=${api.password}`,
        place:d.querySelector('.recipe-section'),
        cbSucces:(recipes)=>{
            console.log(recipes)
            if(recipes.totalResults===0){
                d.getElementsByTagName('h2')[0].insertAdjacentElement('afterend',subtitle('No results found'))
                d.querySelector('.loader').style.display="none"
                d.getElementsByTagName('h2')[1].classList.add('error')
                return 1
            }
            recipes.results.forEach(element => {
                d.querySelector('.recipe-section').innerHTML+=recipeCard(element)
                d.querySelector('.loader').style.display="none"
            });


            api.offset+=12
            $root.appendChild(section('button-container'))
            d.querySelector('.button-container').appendChild(button())

            d.querySelector('.loader').style.display="none"
        }})
   

    }else if(api.types.includes(`${hash}`)){
        scroll(0,0)
        $root.insertAdjacentElement('afterbegin',Header())
        const heroImage=d.querySelector('.hero-image')
        heroImage.style.backgroundImage=`url(./App/assets/header-${localStorage.getItem('typeName')}.jpg)`
        const $titles=d.querySelector('.titles')
        let type=localStorage.getItem('typeName')=='main-curse'?'main course':localStorage.getItem('typeName');
        $titles.innerHTML=`<h2>${hash.slice(2).toUpperCase()}</h2>`
        $titles.classList.add('title-header')
        $main.classList.add('recipe-section')
        $main.appendChild(loader())
        await ajax({url:`${api.url}/recipes/complexSearch?type=${type}&offset=${api.offset}&number=12&apiKey=${api.password}`,
            place:d.querySelector('.recipe-section'),
            cbSucces:(recipes)=>{
                recipes.results.forEach(element => {
                    d.querySelector('.recipe-section').innerHTML+=recipeCard(element)
                    d.querySelector('.loader').style.display="none"
                });
                api.offset+=12
                $root.appendChild(section('button-container'))
                d.querySelector('.button-container').appendChild(button())
            }})

    } 
    else {
        scroll(0,0)
        $root.insertAdjacentElement('afterbegin',nav())
        let id=localStorage.getItem('recipeId');
        $main.appendChild(loader())
        $main.classList.add('main-top')
        await ajax({url:`${api.url}/recipes/${id}/information?apiKey=${api.password}`,
        place:d.querySelector('.random'),
        cbSucces:(recipe)=>{
            $main.appendChild(recipePost(recipe))
            d.querySelector('.loader').style.display="none"
        }})
        


    }


}