import React, { useState } from 'react';

function Home() {
  // State variables
  const [number1, setNumber1] = useState();
  const number2 = 20;
  const [result, setResult] = useState()

  // Function to add numbers and update total in state
  function add() {

    setResult(number1 + number2);
  }
  function sub() {

    setResult(number1 - number2);
  }

  return (
    <>
      <div className="App container">
        <h2 className="my-5">Enter a value to add/subtract</h2>

        <div className="number-inputs ">
          <input type="number" className="form-control " value={number1} onChange={e => setNumber1(+e.target.value)} />
          <div className="input-group mb-3 container">
            <button className="btn " onClick={add} type="button" id="button-addon1 btn ">Add</button>
           <button className="btn " onClick={sub} type="button" id="button-addon1 btn ">subtract</button>        
          </div>
          <h1>Result : {result}</h1>
  
        </div>
      </div>
    </>
  );
}

export default Home