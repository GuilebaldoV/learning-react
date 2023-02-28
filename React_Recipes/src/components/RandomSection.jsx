import React, { useState, useEffect } from 'react';
// import { useFetch } from '../helpers/useFetch';
// import { helpHttp } from '../helpers/helpHttp';
import spoonacular from "../helpers/food_api"
import { useFetch } from '../hooks/useFetch';
import RecipeCard from './recipe-card';

const RandomSection = () => {
    const [loading, setLoading] = useState(null);
    let {data,error}=useFetch(`${spoonacular.url}/recipes/random?number=8&apiKey=${spoonacular.password}`)
    return (<>
    <section className='random'>
        {data && data.recipes.map((el)=><RecipeCard key={el.id}  props={el}></RecipeCard>)}    

    </section>
    </>  );
}
 
export default RandomSection;