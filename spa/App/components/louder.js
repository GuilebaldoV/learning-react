
export function loader(){
    const $louder=document.createElement('div')
    $louder.innerHTML=`<img alt="loanding" src="app/assets/loader.svg">`
    $louder.classList.add('loader')

    return $louder

}