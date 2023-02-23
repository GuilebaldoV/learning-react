export function Hero_image(){
    const $hero=document.createElement('div')
    $hero.classList.add('hero-image')
    $hero.innerHTML=`
        <div class="background">
        <div class="titles">
        <h2>WIDE OPTIONS OF CHOICE</h2>
        <h1>Delicious Receipes</h1>
        <h3>Explore all our big colecctions of tasty recipes</h3>
        </div>
        </div>
    `
    return $hero
}