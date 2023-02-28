// por que esto no es un hook? pues por que no usa nada de react

export const helpHttp=()=>{
    const customFetch=(endpoint,options)=>{
        const defaultHeader={
            accept:"application/json"
        };

        // para cuando no hay respuesta del servidor abortamos
        const controller=new AbortController();
        options.signal=controller.signal;

        options.method=options.method||"GET";
        options.headers=options.headers?{...defaultHeader,...options.headers}:defaultHeader

        // para que se vaya como cadena de texto
        options.body=JSON.stringify(options.body)||false
        // si no tiene body se elimimina
        if(!options.body) delete options.body

        // console.log(options)

        setTimeout(() => controller.abort(), 2000);


        return fetch(endpoint,options)
        .then(res=>res.ok?res.json()
            :Promise.reject({
            err:true,
            status:res.status||"00",
            statusText:res.statusText||"Ocurrio un error"
        })
        )
        .catch((err)=>err)


    }

    const get=(ulr,options={})=>customFetch(ulr,options);
    const post=(url,options={})=>{
        options.method="POST";
        return customFetch(url,options)
    }

    const put=(url,options={})=>{
        options.method="PUT";
        return customFetch(url,options)
    }

    const del=(url,options={})=>{
        options.method="DELETE";
        return customFetch(url,options)
    }


    return {
        get,
        post,
        put,
        del
    }
} 