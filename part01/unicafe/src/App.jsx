import { useState } from 'react'

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text='good' onClick={handleGood}/>
      <Button text='neutral' onClick={handleNeutral}/>
      <Button text='bad' onClick={handleBad}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

function Button({text, onClick}) {
  return (
    <span>
      <button onClick={onClick}>
        {text}
      </button>
    </span>
  )
}

function Statistics({good, bad, neutral}) {
  const total = (good + neutral + bad);
  const s = good - bad;

  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='all' value={total}/>
        <StatisticLine text='average' value={(total != 0) ? s/total : 0}/>
        <StatisticLine text='positive %' value={(total != 0) ? good*100/total : 0}/>
      </table>
    </div>
  )
}

function StatisticLine({text,  value}) {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  )
}

export default App
