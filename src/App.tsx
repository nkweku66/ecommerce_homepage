import { useState } from 'react'
import GlobalStyle from './Styles/GlobalStyles'
import Navbar from './components/navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  )
}

export default App
