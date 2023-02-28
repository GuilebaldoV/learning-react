import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initalForm={
    search:""
}

const Form = () => {
    const [form,setForm]=useState(initalForm)
    const navegarr=useNavigate()

    const handledChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleldClick=(e)=>{
        navegarr(`search/${form.search}`)
    }
    
    return ( 
        <>
        <form className="form">
        <h2>Search your Recipes</h2>
        <div className="search">
        <input name="search" onChange={handledChange}></input>
        <div onClick={handleldClick} className="search-img">
            <img src="img/search.png"></img>
        </div>
        
        </div>
        </form>

        
        </>
     );
}
 
export default Form;