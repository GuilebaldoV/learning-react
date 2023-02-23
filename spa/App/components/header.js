import { Hero_image } from "./hero-img.js";
import {nav} from "./nav.js";

export function Header(){
    let $header=document.createElement('header')
    $header.classList.add('header')
    $header.appendChild(nav())
    $header.append(Hero_image())
    return $header;
}