import { useState } from 'react'
import './App.css'
import Menu from './components/common/Menu'
import Footer from './components/common/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Menu>

        </Menu>
        <Footer></Footer>
    </>
  )
}

export default App
