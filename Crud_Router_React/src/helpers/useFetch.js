import { useState, useEffect } from 'react';

// esto es un hook personalisado el archivo tiene que tener la palabra use
// este hook es basicamente una peticion generica
export const useFetch=(url)=>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const getData=async(url)=>{

            try {
                let res= await fetch(url)
                if(!res.ok){
                    throw {err:true,
                        status:res.status,
                        statusText:!res.statusText?"Ocurrio un eror":res.statusText
                    }
                } 
                let data=await res.json();

                setIsPending(false);
                setData(data)
                setError({err:false})

            } catch (error) {
                setIsPending(true)
                setError(error)
            
            }
    
            }
    
    getData(url)
    },[url])

    return {data,isPending,error}

}