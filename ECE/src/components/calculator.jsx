import React, { useState } from "react";
import Loader from "../../../React_Recipes/src/components/Loader";

function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  
  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

  const handleCalculate = async() => {
    setLoading(true)
    console.log("loading true")
    const apiKey = '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';
    const prompt = `Resuelve la siguiente ecuacacion diferencial y explica paso a paso: ${inputValue}`;
    const engine = 'text-davinci-003';
    const maxTokens = 3000;
    const url = 'https://api.openai.com/v1/engines/' + engine + '/completions';
    const data = {
      prompt: prompt,
      max_tokens: maxTokens
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + apiKey
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log(result.choices[0].text)
    setData(result.choices[0].text)
    setLoading(false)
  };

  const handleChange=(e)=>{ 
    setInputValue(e.target.value)
   }

  const handleDelete=(e)=>{
    setInputValue((inputValue).slice(0,-1))
  }
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9","0", "+", "-", "/","(",")","^","=","y","x","dx","dy"];

  return (

    <main className='main'>
      <div className="titles">
        <h1>Calculadora de ecuaciones diferenciales</h1>
        <p>Resuelve tus problemas de matemáticas con nuestra calculadora de Ecuaciones Diferenciales paso a paso. Mejora tus habilidades en matemáticas. </p></div>
    <div className="calculator">
      <input type="text" onChange={handleChange} value={inputValue}  />

      <div className="buttons-container">
        {buttons.map((buttonValue) => (
          <button key={buttonValue} onClick={() => handleButtonClick(buttonValue)}>
            {buttonValue}
          </button>
        ))}

      </div>
      <div className="actions">
      <button className="calculate-button red" onClick={handleDelete}>
          <img src="/img/delete.png"></img>
        </button>
      <button className="calculate-button" onClick={handleCalculate}>
          Calcular
        </button>

      </div>

    </div>
    {loading && <Loader></Loader>}    
    {data && <div className="respond"><p>{data}</p></div>}
    
    </main>
  );
}

export default Calculator;