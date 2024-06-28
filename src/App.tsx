<<<<<<< HEAD
import React, { useState } from 'react'
=======
import { useState } from 'react'
import GlobalStyle from './Styles/GlobalStyles'
import Navbar from './components/navbar/Navbar'

>>>>>>> feature/navbar

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
    <>   
=======
    <>
      <GlobalStyle />
      <Navbar />
>>>>>>> feature/navbar
    </>
  )
}

export default App
