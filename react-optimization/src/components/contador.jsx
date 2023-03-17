import { useState,useCallback } from "react";
import CounterChild from "./counterChild";
const Counter = () => {
    const [counter, setCounter] = useState(0);
    // const add=()=>setCounter(counter+1)
    // con esto ya no se actualizara cuando se cambie el input
    
    const add2=useCallback(()=>{  
        setCounter(counter+1)
    },[counter])
    const substract=useCallback(()=>{  
        setCounter(counter-1)
    },[counter])
    // const substract=()=>setCounter(counter-1)
    const [input, setInput] = useState("");

    const change=(e)=>setInput(input+e.target.value)
    return ( <>
    <div className="">
        <h2>Counter</h2>
        <nav>
        <button onClick={add2}>+</button>
        <button onClick={substract}>-</button>
        <h3>{counter}</h3>
        </nav>
        {/* cuando aparte de propiedades le pasas funciones, vuelve a rendrizarse cuando el input cambia */}
        {/* tambien se debe memorizar las funciones */}
        {/* esto pq se volvian a remorizar las funciones :0 */}
        <input type="text" onChange={change}></input>
        <CounterChild counter={counter} add={add2} substract={substract}></CounterChild>
    </div>
    
    </> );
}
 
export default Counter;