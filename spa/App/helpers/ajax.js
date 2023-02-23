
export async function ajax(options){
    let{url,cbSucces,place}=options;
    await fetch(url)
    .then(res=>res.ok?res.json():Promise.reject(res))
    .then(json=>cbSucces(json))
    .catch(err=>{
        let message=err.statusText||'Ocurrio un error';
        place.innerHTML=`
        <div class="error">
            <p>Error ${err.status}: ${message}</p>
        </div>
        `
        console.log(err)
    })

}







