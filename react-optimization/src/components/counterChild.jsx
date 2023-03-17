import {memo,useCallback,useMemo} from "react"
const CounterChild = ({counter,add,substract}) => {
    // let superNumero=0;
    // valor calculado algo muy pesado y conviene memorizar
    // for(let i=0;i<10000;i++){
    //     superNumero++
    // }
    // no memoriza la funcion memoriza el resultado
    const superNumero=useMemo(() =>{
        console.log("ejecutando super funcino")
        let numero=0
        for(let i=0;i<1000;i++){
            numero++
        }
        return numero
    },[])

    console.log("se inicia cada vez que se actualiza la variable del padre wtffff")
    return ( <>
    <div style={{border:"thin solid #000",margin:"1rem",padding:"1rem"}}>
        <h2>Counter child</h2>

        <nav>
        <button onClick={add}>+</button>
        <button onClick={substract}>-</button>
        <h3>{counter}</h3>
        </nav>

        <h3>{superNumero}</h3>

    </div>
    </> );
}
 
export default memo(CounterChild)