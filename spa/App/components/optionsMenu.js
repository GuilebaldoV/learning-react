import { section } from "./section.js";

export function Menu(){
    const $menu=section('options')
    $menu.innerHTML=`
    <article class="option">
        <figure  class="option-card" data-type="snack">
            <img src="./App/assets/snack.png" data-type="snack">
            <figcaption data-type="snack">Snacks<figcaption>
        </figure>
    </article>
    
    <article class="option">
        <figure class="option-card" data-type="main curse">
            <img src="./App/assets/maincourse.png" data-type="main-curse">
            <figcaption data-type="main curse">Main Course<figcaption>
        </figure>
    </article>

    <article class="option">
        <figure class="option-card" data-type="dessert">
            <img src="./App/assets/dessert.png" data-type="dessert">
            <figcaption data-type="dessert">Dessert<figcaption>
        </figure>
    </article>

    <article class="option">
        <figure class="option-card" data-type="salad">
            <img src="./App/assets/salad.png" data-type="salad">
            <figcaption data-type="salad">Salad<figcaption>
        </figure>
    </article>

    <article class="option">
        <figure class="option-card" data-type="soup">
            <img src="./App/assets/soup.png" data-type="soup">
            <figcaption data-type="soup">Soup<figcaption>
        </figure>
    </article>

    <article class="option">
        <figure class="option-card" data-type="bread">
        <img src="./App/assets/breads.png" data-type="bread">
        <figcaption data-type="bread">Bread<figcaption>
        </figure>
    </article>
        <article class="option">
            <figure class="option-card" data-type="breakfast">
                <img src="./App/assets/breakfast.png" data-type="breakfast">
                <figcaption data-type="breakfast">Breaksfast<figcaption>
            </figure>
        </article>
        <article class="option">
            <figure class="option-card" data-type="sauces">
                <img src="./App/assets/sauces.png" data-type="sauces">
                <figcaption data-type="sauces">Sauces<figcaption>
            </figure>
        </article>
        <article class="option">
        <figure class="option-card" data-type="drinks">
            <img src="./App/assets/drink.png" data-type="drinks">
            <figcaption data-type="drinks">Drinks<figcaption>
        </figure>
        </article>


    `
    return $menu
}