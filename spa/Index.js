import {App} from './App.js'
import { recipeCard } from './App/components/recipeCard.js';
import { ajax } from './App/helpers/ajax.js';
import api from './App/helpers/food_api.js';
const d=document;
document.addEventListener('DOMContentLoaded',App)

window.addEventListener('hashchange',()=>{

    App();

})

document.addEventListener('click',async e=>{
    if(e.target.matches('.recipe-card *')){
        localStorage.setItem('recipeId',e.target.dataset.id)
    }
    if (e.target.innerHTML==='Recipes&amp;Drinks') {
        localStorage.removeItem('recipeId')
        location.hash=""
    } 
    if (e.target.matches('.option *')){
        localStorage.setItem('typeName',e.target.dataset.type)
        location.hash=`#/${localStorage.getItem('typeName')}`

    }
    if (e.target.matches('.nav-menu a')){
        localStorage.setItem('typeName',e.target.dataset.type)
        console.log('pasta',localStorage.getItem('typeName'))
    }
    if (e.target.matches('.button')){
        let {hash}=location;

        let type=localStorage.getItem('typeName')=='main-curse'?'main course'
        :localStorage.getItem('typeName')
        let url=hash.includes('#/search')?`${api.url}/recipes/complexSearch?query=${localStorage.getItem('foodSearch')}&offset=${api.offset}&number=12&apiKey=${api.password}`
        :`${api.url}/recipes/complexSearch?type=${type}&offset=${api.offset}&number=12&apiKey=${api.password}`

        await ajax({url,
        place:d.querySelector('.recipe-section'),
        cbSucces:(recipes)=>{
            recipes.results.forEach(element => {
                d.querySelector('.recipe-section').innerHTML+=recipeCard(element)
            });
            api.offset+=12
            if (recipes.offset+12>recipes.totalResults){
                d.querySelector('.button').style.display='none'
            }
        }})
    }
    if(e.target.matches('.search-img img')){
        location.hash=`#/search?${d.querySelector('.search input').value}`
        localStorage.setItem('foodSearch',d.querySelector('.search input').value)


    }


})

document.addEventListener('submit',e=>{
    e.preventDefault()
    localStorage.setItem('foodSearch',e.target.search.value)
    location.hash= `#/search?${e.target.search.value}`
})


