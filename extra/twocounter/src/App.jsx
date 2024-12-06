import { useState } from 'react'

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [history, setHistory] = useState([]);

  const handleLeftClick = () => {
    setLeft(left + 1);
    setHistory(history.concat('L'));
  }
  const handleRightClick = () => {
    setRight(right + 1);
    setHistory(history.concat('R'));
  }

  return (
    <div>
      <Display counter={left}/>
      <Button text='left' onClick={handleLeftClick}/>
      <Button text='right' onClick={handleRightClick}/>
      <Display counter={right}/>
      <HistoryDisplay history={history}/>
    </div>
  )
}

function Display(props) {
  return (
    <div>
      {props.counter}
    </div>
  )
}

function Button({text, onClick}) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

function HistoryDisplay({history}) {

  if (history.length === 0) {
    return (
      <div>Click on some buttons!</div>
    )
  }
  return (
    <div>
      {history.join(' ')}
    </div>
  )
}


export default App
