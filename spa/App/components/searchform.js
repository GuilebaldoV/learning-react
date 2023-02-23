
export function SearchForm(){

    const $form=document.createElement('form')
    $form.innerHTML=`
    <h2>Search your Recipes</h2>
    <div class="search">
    <input name="search" type="search"></input>   
    
    <div class="search-img">
    <img src="./App/assets/search.png">
    </img>
    </div>
    
    `
    $form.classList.add('form')


    return $form

}