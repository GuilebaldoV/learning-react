import { useNavigate } from "react-router-dom";

const CrudTableRow = ({el,setDataToEdit,deleteData}) => {
    let nav=useNavigate()
    let {name,constellation,id}=el
    const handledEdit=()=>{
        // handledEditt
        setDataToEdit(el)
        nav(`/editar/${id}`)
    }
    return ( 
        <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td><button onClick={handledEdit}>Editar</button>
        <button onClick={()=>{deleteData(id)}}>Eliminar</button></td>
        </tr>
     );
}
 
export default CrudTableRow;