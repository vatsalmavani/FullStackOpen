import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const handlePlus = () => setCounter(counter+1);
  const handleMinus = () => setCounter(counter-1);
  const handleZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter}/>
      <Button text="plus" onClick={handlePlus}/>
      <Button text="zero" onClick={handleZero}/>
      <Button text="minus" onClick={handleMinus}/>
    </div>
  )
}

function Display(props) {
  return (
    <div>
      <h1>{props.counter}</h1>
    </div>
  )
}

function Button({onClick}) {
  return (
    <button onClick={onClick}>
      butttoooon
    </button>
  )
}

export default App
