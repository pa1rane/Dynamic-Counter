import React, { useState } from 'react';

const App = () => {

 const [count, setCount] = useState(0);
 const [inputValue, setInputValue] = useState(0);

 const handleIncrement = () => {
    setCount(inputValue > 1 ? count + parseInt(inputValue) : count + 1)
 }

 const handleDecrement = () => {
    setCount(inputValue > 1 ? count - parseInt(inputValue) : count - 1)
 }

 const handleInputChange = (e) => {
    setInputValue(e.target.value)
 }

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <div className='buttons'>
        <button className='decrement' onClick={handleDecrement}>-</button>
        <span>  </span>
        <button className='increment' onClick={handleIncrement}>+</button>
      </div>
      <div className='operate'>
      <p>Increment OR Decrement by</p>
      <input type="number" value={inputValue} onChange={handleInputChange}/>
      </div>
      <button className='reset' onClick={() => [setCount(0),setInputValue(0)]}>Reset</button>
    </>
  )
}

export default App
