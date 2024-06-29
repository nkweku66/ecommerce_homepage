import { data } from './info-data/data'
import { useState, useEffect } from 'react'
import GlobalStyle from './Styles/GlobalStyles'
import Hero from './components/hero/Hero'
import Features from './components/features/Features'
import About from './components/about/About'


const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  const dataLen = data.length;

  
  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === 'ArrowRight') {
        changeImage();
      } else if (event.key === 'ArrowLeft') {
        moveBack();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [index]);
  
  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === 'ArrowRight') {
        changeImage();
      } else if (event.key === 'ArrowLeft') {
        moveBack();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [index]);
  
  const changeImage = () => {
    setIndex((prev) => (prev + 1) % dataLen)
  }
  
  const moveBack = () => {
    setIndex((prev) => (prev - 1 + dataLen) % dataLen )
  }
 
  return (
    <>
      <GlobalStyle />
      <Hero
        coverImage={data[index].coverImage}
        mobileImage={data[index].mobileImage}
        moveForward={changeImage}
        moveBack={moveBack}
      />
      <Features
        heading={data[index].heading}
        description={data[index].description}
      />
      <About />
    </>
  )
}

export default App
