import OptionCard from "./OptionCard";
import {Link} from 'react-router-dom'
const OptionSection = () => {
    return ( <>
        <section className="options">
        <OptionCard name="Snack" img="/img/snack.png"></OptionCard>
        <OptionCard name="Main Course" img="/img/maincourse.png"></OptionCard>
        <OptionCard name="Dessert" img="/img/dessert.png"></OptionCard>
        <OptionCard name="Salad" img="/img/salad.png"></OptionCard>
        <OptionCard name="Soup" img="/img/soup.png"></OptionCard>
        <OptionCard name="Bread" img="/img/breads.png"></OptionCard>
        <OptionCard name="breakast" img="/img/breakfast.png"></OptionCard>
        <OptionCard name="Sauces" img="/img/sauces.png"></OptionCard>
        <OptionCard name="Drinks" img="/img/drinks.png"></OptionCard>
        </section>
    </> );
}
 
export default OptionSection;