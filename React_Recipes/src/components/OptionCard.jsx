import {Link} from "react-router-dom"
const OptionCard = ({name,img}) => {
    return (<>
    <article className="option">
        <Link to={`/type/${name}`}>
        <figure className="option-card">
            <img src={img} alt={name}></img>
            <figcaption>
                {name}
            </figcaption>
        </figure>
        </Link>
    </article>
    
    </>  );
}
 
export default OptionCard;