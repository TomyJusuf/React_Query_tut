import './App.css';
import Home from './components/Home';
import SuperHeroes from './components/SuperHeroes';
import RQSuperHero from './components/RQSuperHero';
import { Route, Routes, NavLink } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <nav className="bg-violet-700 w-full px-2 flex justify-between gap-x-5 underline text-yellow-50 font-bold py-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/super-heroes">Traditional Super Heroes</NavLink>
        <NavLink to="/rq-super-heroes">RQ Super Heroes</NavLink>
      </nav>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHero />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
