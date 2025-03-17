import { useState } from 'react';
import './App.css'
import { Header } from './components/Header';
import { Main } from './pages/Main';
import { UnsplashProvider } from './service/UnsplashContext';

function App() {

  const [classBloquear, setClassBloquear] = useState(false);

  return (
    <div className={classBloquear ? 'bloquear' : ''} >
      <UnsplashProvider  >
        <Header />
        <Main bloquear={setClassBloquear} />
      </UnsplashProvider>
    </div >

  );
}

export default App;