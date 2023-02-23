import CrudTableRow from "./CrudTableRow";

// sfc
const CrudTable = ({data,setDataToEdit,deleteData}) => {
    return ( 
        <>
        <h3>Tabla de datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Constelacion</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
        {data.length===0?(
            // console.log("sin datos")
        <tr>
            <td colSpan="3">Sin datos</td>
        </tr>
        ):(
        data.map(el=><CrudTableRow key={el.id} setDataToEdit={setDataToEdit} 
            deleteData={deleteData} el={el}></CrudTableRow>)
        )}
            </tbody>
        </table>




        </>
     );
}
 
export default CrudTable;