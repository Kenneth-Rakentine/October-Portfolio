import './App.css';
import Header from './components/Header';
import Logo from './components/Logo';
import { useState, useEffect } from 'react';
import Splash from './pages/Splash';

function App() {

  const [isLoading, setIsLoading] = useState(true);
   
    useEffect(()=>{
      setTimeout(()=>{
        setIsLoading(false);
      }, 1500);
    }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Splash/>
      ) : (
        <div>
        <Header/>
        <Logo/>
        </div>

      
    )}
    </div>
      
  );
}

export default App;
