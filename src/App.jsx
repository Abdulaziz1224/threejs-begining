import { useState } from 'react'
import Threejs from './Threejs'

import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Threejs />
    </div>
  )
}

export default App
