import { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar'
import { Onboarding } from './components/Onboarding';
import GeminiLeafClassifier from './components/genAiMenu'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Diagnose } from './components/Diagnose';

function ConditionalLayout({ children }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Move to a separate component
  
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768); // Example: Detect screens smaller than 768px
    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the state
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ... (Optional) Screen size detection logic here (if needed)

  return (
    <>
      {isSmallScreen ? (
        <div className='bg-[#ECF0EA] fixed max-h-screen'>{children}</div>
      ) : (
        <div className='bg-[#ECF0EA]'>{children}</div>
      )}
    </>
  );
}

function App() {
  const [isDelayOver, setIsDelayOver] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDelayOver(true); // Set state to trigger navigation
    }, 2000); // 3 seconds delay

    return () => clearTimeout(timeoutId); // Cleanup function
  }, []);

  return (
    <div className='bg-[#ECF0EA]'>
      <BrowserRouter>
        <Routes> 
        <Route
            path="/"
            element={
              isDelayOver ? (
                <ConditionalLayout>
                  <GeminiLeafClassifier />
                  <NavBar />
                </ConditionalLayout>
              ) : (
                <Onboarding />
              )
            }
          />

          <Route path='/identifier' element={<><GeminiLeafClassifier/>
          </>} />
          <Route path='/diagnose' element={<>
            <Diagnose/><NavBar/>
          </>
}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
