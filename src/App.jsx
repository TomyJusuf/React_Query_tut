import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes, NavLink } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';
import Home from './components/Home';
import SuperHeroes from './components/SuperHeroes';
import RQSuperHeros from './components/RQSuperHeros';

import RQ_Super_Hero from './components/RQ_Super_Hero';
import ParallelQueries from './components/ParallelQueries';
import Dynamicparallel from './components/Dynamicparallel';

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
          <Route
            path="/rq-dynamic-parallel"
            element={<Dynamicparallel heroIds={[1, 3]} />}
          />
          <Route path="/rq-parallel" element={<ParallelQueries />} />
          <Route path="/rq-super-heroes/:heroId" element={<RQ_Super_Hero />} />
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeros />} />
        </Routes>
        {/* Included here */}
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}
export default App;
