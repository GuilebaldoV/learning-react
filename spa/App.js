import {Header} from './App/components/header.js'
import { Main } from './App/components/Main.js';
import { section } from './App/components/section.js';
import { recipeCard } from './App/components/recipeCard.js';
import { SearchForm } from './App/components/searchform.js';
import { ajax } from './App/helpers/ajax.js';
import api from './App/helpers/food_api.js'
import { Menu } from './App/components/optionsMenu.js';
import { subtitle } from './App/components/subtitle.js';
import { loader } from './App/components/louder.js';
import { router } from './App/components/router.js';

export function App(){
    const d=document;
    const $root=d.getElementById('root')
    $root.innerHTML=''
    $root.appendChild(Main())
    router()
    }