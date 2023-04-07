import { useState } from 'react'

const Header = ({ text }) => <div><h1>{text}</h1></div>
const StatisticLine = ({ value, text }) => <tr><td>{text}</td><td>{value}</td></tr>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = (props) => {

  const { good, neutral, bad } = props
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = 100 * good / total

  if (total === 0) {
    return (
      <div>
        <Header text="statistics" />
        <div>No feedback given</div>
      </div>
    )
  }

  return (
    <div>
      <Header text="statistics" />
      <table>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + ' %'} />
      </table>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () =>
    setGood(good + 1)

  const handleNeutralClick = () =>
    setNeutral(neutral + 1)

  const handleBadClick = () =>
    setBad(bad + 1)

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App