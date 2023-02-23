// import React from 'react';
import React, { useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
const initalForm={
    name:"",
    constellation:"",
    id:null,
}

const CrudForm = ({createData,updateData,dataToEdit,setDataToEdit}) => {
    // para manejar historial
    let history=useNavigate()

    // tiene sentido pues cada ves que se de click en editar
    // la variable datatoedit cambia y entonces la info se pasa al formulario
    useEffect(() => {
        // console.log("efecto")
        if(dataToEdit){
            console.log("???")
            setForm(dataToEdit)
        }else{
        console.log("efecto2")
            setForm(initalForm);
        }
    }, [dataToEdit]);

    // const [Nombre, setNombre] = useState({});
    const [form, setForm] = useState(initalForm);

    const handledChange=(e)=>{
        // console.log("e.name",[e.target.name])
        // console.log("holas")
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handledSubmit=(e)=>{
        e.preventDefault();
        // estod e aqui hace referencia al state
        if(!form.name||!form.constellation){
            alert("Datos incompletps")
            return;
        }

        if(form.id===null){
            createData(form);
        }else{
            console.log("entre aqui")
            updateData(form);
        }
        handledReset();

        console.log("form",form)

    }

    const handledReset=(e)=>{

        setForm(initalForm)
        setDataToEdit(null)
        //  redireccion
        history('/')
    
    }

    return (  
        <>
        <h3>{dataToEdit?"Editar":"Agregar"}</h3>
        <form onSubmit={handledSubmit}>
            
            <input  onChange={handledChange}
             value={form.name} 
            type="text" 
            name="name"
            placeholder="Nombre"></input>
            
            <input onChange={handledChange}
              type="text" 
              name="constellation" 
              placeholder="coonstelacion"
              value={form.constellation} 
              ></input>
            
            <input type="submit" value="Enviar"></input>
            <input type="reset" value="Limpiar" onClick={handledReset}></input>
        </form>
        </>
    );
}
 
export default CrudForm;