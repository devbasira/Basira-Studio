import { useState } from 'react'
import './App.css'
import PortfolioLayout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-screen flex justify-center'>
    <PortfolioLayout />
   </div>
  )
}

export default App
