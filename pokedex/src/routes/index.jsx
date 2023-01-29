import { Routes, Route, Link } from 'react-router-dom';
import AboutPokemonPage from '../pages/AboutPokemonPage';
import Home from '../pages/Home';

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about/:id' element={<AboutPokemonPage />} />
    </Routes>
  );
}
