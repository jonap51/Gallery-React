import './App.css'
//import { CardView } from './components/CardView';
import { Header } from './components/Header';
import { Main } from './pages/Main';
import { UnsplashProvider } from './service/UnsplashContext';

function App() {
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