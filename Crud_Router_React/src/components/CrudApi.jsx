import CrudForm from './crudForm';
import CrudTable from './crudTable';
import React, { useState,useEffect} from 'react';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import Message from './Message';
import { NavLink,Link, Route, Routes,useParams,Outlet, Navigate} from 'react-router-dom';
import Error404 from './CrudErro404';


const CrudApi = () => {

    const [db, setDb] = useState(null);
// para saber si es una insercion o un actaulizacion
    const [dataToEdit, setDataToEdit] = useState(null);
    // let api=helpHttp();
    let url="http://localhost:5000/santos"
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        helpHttp().get(url).then(res=>{
            console.log(res)
            if(!res.err){
                setDb(res)
                setError(null)
            }else{
                setDb(null)
                setError(res)
            }
            setLoading(false)

        })
// sin incluyo api es un loop infinito
    }, [url]);


    

    const createData=(data)=>{
        data.id=Date.now()
        console.log(data)
        // para que construya
        let options={body:data,headers:{"content-type":"application/json"}}
        helpHttp().post(url,options)
        .then((res)=>{
            console.log(res)
            if(!res.err){
                setDb([...db,res])
            }else{
                setError(res);
            }

        })
    }
    const updateData=(data)=>{
        // un arreglo que cambia el data xd
        const newUrl=`${url}/${data.id}`
        let options={body:data,headers:{"content-type":"application/json"}}
        helpHttp().put(newUrl,options)
        .then((res)=>{
            console.log(res)
            if(!res.err){
                // setDb([...db,res])
                let newData=db.map(el=>el.id===data.id?data:el)
                setDb(newData)
            }else{
                setError(res);
            }

        })


        
    
    }
    const deleteData=(id)=>{
        const newUrl=`${url}/${id}`
        // let options={body:data,headers:{"content-type":"application/json"}}
        helpHttp().del(newUrl)
        .then((res)=>{
            console.log(res)
            if(!res.err){
                let newData=db.filter(el=>el.id!==id)
                console.log(newData)
                setDb(newData)
            }else{
                setError(res);
            }

        })
    
    
    
    
    }



    return ( 
        <>
        <h2>
        Crud Api
        </h2>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/agregar">Agregar</Link>
        <Routes>
            <Route path='/' element={
             db && <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit}></CrudTable>
        }>
            </Route>

            <Route path="agregar" element={
                // console.log("hola")
                <CrudForm createData={createData} updateData={updateData} 
                dataToEdit={dataToEdit} 
                setDataToEdit={setDataToEdit}></CrudForm> 
            }>
            </Route>
            <Route path="editar/:id" element={
                        <CrudForm createData={createData} updateData={updateData} 
                        dataToEdit={dataToEdit} 
                        setDataToEdit={setDataToEdit}></CrudForm> 
            }>

            </Route>
            <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        
         {/* {loading && <Loader></Loader>} */}
        {/* {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>} */}
        {/* si hay algo en el base */}

        </>
    );
}
 
export default CrudApi;