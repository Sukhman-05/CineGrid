import './css/App.css'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Favorite from './pages/Favorite';
import NavBar from './components/NavBar';
import { MovieProvider } from './context/MovieContext';

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}


export default App
