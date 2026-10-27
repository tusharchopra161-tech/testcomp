import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>count: ${count}</h1>
      <button onClick={() => { setCount(count + 1) }}>ADD</button>
      <button onClick={() => { setCount(count + 1) }}>subtract</button>
      <h1>the react frontend is here</h1>
    </>
  )
}

export default App
