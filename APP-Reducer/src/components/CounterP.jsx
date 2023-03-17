import { useReducer } from "react";
import { useState } from "react";

const initalState={counter:0}

const init=(initalState)=>{
    return {
        counter: initalState.counter + 100
    }
}

const TYPES={
    INCREMENT:"INCREMENT",
    DECREMENT:"DECREMENT",
    RESET:"RESET",
    DECREMENT_5:"DECREMENT_5",
    INCREMENT_5:"INCREMENT_5"
}

// ahora esta acutaliza el estado
function reducer(state,action){
    switch (action.type) {
        case TYPES.INCREMENT:
            return {counter:state.counter+1}    
        case TYPES.DECREMENT:
            return {counter:state.counter-1};
        case TYPES.INCREMENT_5:
            return {counter:state.counter+ action.payload};
        case TYPES.DECREMENT_5:
                return {counter:state.counter- action.payload};
        default:
            return state;
    }
    // useReducer
}

const CounterPRO = () => {
    // const [counter, setCounter] = useState(0);

    const [state,dispatch]= useReducer(reducer,initalState,init)

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
 
export default CounterPRO;