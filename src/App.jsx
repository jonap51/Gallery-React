import { useContext, useRef, useState } from 'react';
import './App.css'
import { Header } from './components/Header';
import { Test } from './components/test';
import { Main } from './pages/Main';
import { UnsplashProvider } from './service/UnsplashContext';

function App() {


  const [classBloquear, setClassBloquear] = useState(false);

  /*
     <Test />
*/
  return (
    <UnsplashProvider  >
      <div className={classBloquear ? 'bloquear' : ''} >
        <Header />
        <Main bloquear={setClassBloquear} />
      </div >
    </UnsplashProvider>

  );
}

export default App;