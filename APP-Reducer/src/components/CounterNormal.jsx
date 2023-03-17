import { useReducer } from "react";
import { TYPES } from "../actions/counterActions";
import { counterInit, counterInitalState, counterReducer } from "../reducers/conunterReducers";


// ahora esta acutaliza el estado


const Counter = () => {
    // COUNTER MEJORADO
    const [state,dispatch]= useReducer(counterReducer,counterInitalState,counterInit)

    const add=()=>dispatch({type:TYPES.INCREMENT})
    const substract=()=>dispatch({type:TYPES.DECREMENT})
    const add5=()=>dispatch({type:TYPES.INCREMENT_5,payload:5})
    const substract5=()=>dispatch({type:TYPES.DECREMENT_5,payload:5})
    // const substract=()=>setCounter(counter-1)
    
    return ( 
        <>
        <div className="counter">
            <h3>{state.counter}</h3>
            <button onClick={substract}>substract</button>
            <button onClick={add}>add</button>
            <button onClick={add5}>+5</button>
            <button onClick={substract5}>-5</button>
            <button onClick={add}>0</button>
        </div>
        
        </>

     );
}
 
export default Counter;