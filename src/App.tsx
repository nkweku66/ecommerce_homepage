import GlobalStyle from './Styles/GlobalStyles'
import Hero from './components/hero/Hero'
import data from './data/data'
import { useState, useEffect } from 'react'


const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const dataLen = data.length;

  useEffect(() => {
    if (isTransitioning) {
      const timeoutId = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); 
  
      return () => clearTimeout(timeoutId);
    }
  }, [isTransitioning]);
  
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
  
    const handleSwipe = (event: TouchEvent) => {
      const touchStartX = event.touches[0].clientX;
      const touchEndX = event.changedTouches[0].clientX;
  
      if (touchStartX - touchEndX > 50) {
        changeImage(); 
      }
  
      if (touchStartX - touchEndX < -50) {
        moveBack(); 
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleSwipe);
    window.addEventListener('touchend', handleSwipe);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleSwipe);
      window.removeEventListener('touchend', handleSwipe);
    };
  }, [index]); 
  
  const changeImage = () => {
    setIsTransitioning(true);
    setIndex((prev) => (prev + 1) % dataLen)
  }
  
  const moveBack = () => {
    setIsTransitioning(true);
    setIndex((prev) => (prev - 1 + dataLen) % dataLen )
  }
 
  return (
    <>
      <GlobalStyle />
      <Hero
        coverImage={data[index].coverImage}
        mobileImage={data[index].mobileImage}
        heading={data[index].heading}
        description={data[index].description}
        moveForward={changeImage}
        moveBack={moveBack}
        isTransitioning={isTransitioning}
      />
    </>
  )
}

export default App
