// import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import tasbeeh from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0) 
  let addValue = ()=>{
    if(counter<100)
    setCounter(counter+1)
  }
  let removeValue = ()=>{
    if(counter > 0)
    setCounter(counter-1)
  }
  let reset =()=>{
    setCounter(0)
  }
  return (
    <div className='container'>
      <h2>DIGITAL TASBEEH APP
      </h2>
      <div><img src="https://realstone.pk/wp-content/uploads/2024/07/2024_01_18_12_53_IMG_6580-e1720524012508.jpg" alt="" /></div>
      <div className='TasbeehDiv'>{counter}</div>
      <h3>Counter is "{counter}"</h3>
      
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
    <button onClick={reset}>Reset Tasbeeh</button>
    </div>
  )
}

export default App
