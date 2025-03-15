import './App.css'
import { Header } from './components/Header';
import { Test } from './components/test';
import { Main } from './pages/Main';
import { UnsplashProvider } from './service/UnsplashContext';

function App() {

  /*

     <Test />
*/
  return (
    <div>

      <UnsplashProvider>
        <Header />
        <Main />
      </UnsplashProvider>
    </div>
  );
}

export default App;