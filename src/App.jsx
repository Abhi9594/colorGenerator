import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RandomColor from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RandomColor/>
    </>
  )
}

export default App
