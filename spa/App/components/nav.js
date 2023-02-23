export function nav(){
    let $nav=document.createElement('nav')
    $nav.classList.add('nav')
    $nav.innerHTML=`
    <div class="logotype">
        <img src="./App/assets/food.png">
        <h3>Recipes&Drinks</h3>
    </div>
    <div class="nav-menu">
        <a href="#/dessert" data-type="dessert">Dessert</a>
        <a href="#/main-curse" data-type="main-curse">Main Course</a>
        <a href="#/snack" data-type="snack">Snack</a>
        <a href="#/drinks" data-type="drinks">Drinks</a>
    </div>
    `

    return $nav
}