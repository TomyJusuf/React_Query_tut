import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from '../hooks/useSuperHeroesData';

export default function RQSuperHero() {
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');

  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching', data);
  };

  const onError = () => {
    console.log('Perform side effect after encountering error');
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  // Mutation and alias addHero for mutation
  const { mutate: addHero } = useAddSuperHeroData();

  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isLoading || isFetching) {
    return <h2>loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQ Super Hero Page</h2>
      {/* Form */}
      <div className="mt-16">
        <input
          className="text-black"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{' '}
        <input
          className="text-black"
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <button
        onClick={refetch}
        className="border px-2 py-1 bg-violet-500 font-black mt-5"
      >
        Fetch heroes
      </button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`} className="underline">
              {hero.name}
            </Link>
          </div>
        );
      })}
      {/* {data.map((heroName) => {return (<div className="" key={heroName}>{heroName}</div>)})} */}
    </>
  );
}
